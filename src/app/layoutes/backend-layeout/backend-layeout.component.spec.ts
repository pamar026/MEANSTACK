import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendLayeoutComponent } from './backend-layeout.component';

describe('BackendLayeoutComponent', () => {
  let component: BackendLayeoutComponent;
  let fixture: ComponentFixture<BackendLayeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendLayeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendLayeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
