import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AUsuarioComponent } from './a-usuario.component';

describe('AUsuarioComponent', () => {
  let component: AUsuarioComponent;
  let fixture: ComponentFixture<AUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
