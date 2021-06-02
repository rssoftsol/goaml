import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserDialogueComponent } from './create-user-dialogue.component';

describe('CreateUserDialogueComponent', () => {
  let component: CreateUserDialogueComponent;
  let fixture: ComponentFixture<CreateUserDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
