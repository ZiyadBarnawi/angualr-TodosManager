import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBox } from './task-box';

describe('TaskBox', () => {
  let component: TaskBox;
  let fixture: ComponentFixture<TaskBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
