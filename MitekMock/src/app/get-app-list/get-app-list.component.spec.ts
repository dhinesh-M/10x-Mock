import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppListComponent } from './get-app-list.component';

describe('GetAppListComponent', () => {
  let component: GetAppListComponent;
  let fixture: ComponentFixture<GetAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
