import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStoryComponent } from './all-story.component';

describe('AllStoryComponent', () => {
  let component: AllStoryComponent;
  let fixture: ComponentFixture<AllStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
