import { Component, OnInit } from '@angular/core';
import {UapiService} from '../../servicios/api/uapi.service';
import {Router} from '@angular/router';

import { UsuariosI} from '../../models/usuarios.interface';

@Component({
  selector: 'app-l-usuario',
  templateUrl: './l-usuario.component.html',
  styleUrls: ['./l-usuario.component.css']
})
export class LUsuarioComponent implements OnInit {

  usuarios:UsuariosI[];
  constructor(private api:UapiService, private router:Router) { }
  
  ngOnInit(): void {
    this.api.allusuarios().subscribe(data =>{
      console.log(data[2]);
      this.usuarios=data;
    });
  }

}
