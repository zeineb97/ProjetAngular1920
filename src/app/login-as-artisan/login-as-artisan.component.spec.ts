import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsArtisanComponent } from './login-as-artisan.component';

describe('LoginAsArtisanComponent', () => {
  let component: LoginAsArtisanComponent;
  let fixture: ComponentFixture<LoginAsArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAsArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
