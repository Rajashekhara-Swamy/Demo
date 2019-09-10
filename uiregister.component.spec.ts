import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiregisterComponent } from './uiregister.component';

describe('UiregisterComponent', () => {
  let component: UiregisterComponent;
  let fixture: ComponentFixture<UiregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
