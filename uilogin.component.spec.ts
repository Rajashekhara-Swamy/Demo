import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiloginComponent } from './uilogin.component';

describe('UiloginComponent', () => {
  let component: UiloginComponent;
  let fixture: ComponentFixture<UiloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
