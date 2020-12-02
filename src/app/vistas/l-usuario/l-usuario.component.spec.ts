import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LUsuarioComponent } from './l-usuario.component';

describe('LUsuarioComponent', () => {
  let component: LUsuarioComponent;
  let fixture: ComponentFixture<LUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
