import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteArtisanProfileComponent } from './complete-artisan-profile.component';

describe('CompleteArtisanProfileComponent', () => {
  let component: CompleteArtisanProfileComponent;
  let fixture: ComponentFixture<CompleteArtisanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteArtisanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteArtisanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
