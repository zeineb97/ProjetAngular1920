import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtisanProfileComponent } from './edit-artisan-profile.component';

describe('EditArtisanProfileComponent', () => {
  let component: EditArtisanProfileComponent;
  let fixture: ComponentFixture<EditArtisanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArtisanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtisanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
