import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DUsuarioComponent } from './d-usuario.component';

describe('DUsuarioComponent', () => {
  let component: DUsuarioComponent;
  let fixture: ComponentFixture<DUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
