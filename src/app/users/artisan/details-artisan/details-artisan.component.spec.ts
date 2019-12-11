import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArtisanComponent } from './details-artisan.component';

describe('DetailsArtisanComponent', () => {
  let component: DetailsArtisanComponent;
  let fixture: ComponentFixture<DetailsArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
