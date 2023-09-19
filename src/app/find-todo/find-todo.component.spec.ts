import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTodoComponent } from './find-todo.component';

describe('FindTodoComponent', () => {
  let component: FindTodoComponent;
  let fixture: ComponentFixture<FindTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindTodoComponent]
    });
    fixture = TestBed.createComponent(FindTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
