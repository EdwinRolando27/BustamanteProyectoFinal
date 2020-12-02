import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {UapiService} from '../../servicios/api/uapi.service';
import {LoginI} from '../../models/login.interface';

import {Router} from '@angular/router';
import {ResponseI} from '../../models/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginform =new FormGroup({
     email:new FormControl('',Validators.required),
     password: new FormControl('',Validators.required)
   })
  constructor(private api:UapiService, private router:Router) { }

  errorS:boolean=false;
  errorMsg:any="";

  ngOnInit(): void { 
  }
  onLogin(form:LoginI){
    this.api.loginByemail(form).subscribe(data =>{
      
    let dataResponse:ResponseI=data;
      if(data.ok== true){
        localStorage.setItem("x-token",data.token)
        this.router.navigate(['lusuarios']);
      }else{
        this.errorS=true;
        this.errorMsg=dataResponse.token.msg;
      }
    });
  }
}
