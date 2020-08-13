import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayeoutComponent } from './default-layeout.component';

describe('DefaultLayeoutComponent', () => {
  let component: DefaultLayeoutComponent;
  let fixture: ComponentFixture<DefaultLayeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
