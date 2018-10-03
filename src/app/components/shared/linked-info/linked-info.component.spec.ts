import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInfoComponent } from './linked-info.component';

describe('LinkedInfoComponent', () => {
  let component: LinkedInfoComponent;
  let fixture: ComponentFixture<LinkedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
