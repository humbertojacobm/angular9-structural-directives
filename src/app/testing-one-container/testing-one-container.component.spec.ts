import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingOneContainerComponent } from './testing-one-container.component';

describe('TestingOneContainerComponent', () => {
  let component: TestingOneContainerComponent;
  let fixture: ComponentFixture<TestingOneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingOneContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingOneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
