import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTwoUnlessDirectiveComponent } from './testing-two-unless-directive.component';

describe('TestingTwoUnlessDirectiveComponent', () => {
  let component: TestingTwoUnlessDirectiveComponent;
  let fixture: ComponentFixture<TestingTwoUnlessDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingTwoUnlessDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingTwoUnlessDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
