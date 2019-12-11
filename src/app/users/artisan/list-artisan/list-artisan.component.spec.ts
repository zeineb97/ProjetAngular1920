import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtisanComponent } from './list-artisan.component';

describe('ListArtisanComponent', () => {
  let component: ListArtisanComponent;
  let fixture: ComponentFixture<ListArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
