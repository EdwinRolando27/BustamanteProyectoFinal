import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUsuarioComponent } from './c-usuario.component';

describe('CUsuarioComponent', () => {
  let component: CUsuarioComponent;
  let fixture: ComponentFixture<CUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
