import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddAppComponent } from './home-add-app.component';

describe('HomeAddAppComponent', () => {
  let component: HomeAddAppComponent;
  let fixture: ComponentFixture<HomeAddAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAddAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
