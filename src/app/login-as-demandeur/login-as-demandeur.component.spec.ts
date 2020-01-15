import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsDemandeurComponent } from './login-as-demandeur.component';

describe('LoginAsDemandeurComponent', () => {
  let component: LoginAsDemandeurComponent;
  let fixture: ComponentFixture<LoginAsDemandeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAsDemandeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsDemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
