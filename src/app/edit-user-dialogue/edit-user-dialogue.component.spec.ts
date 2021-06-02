import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDialogueComponent } from './edit-user-dialogue.component';

describe('EditUserDialogueComponent', () => {
  let component: EditUserDialogueComponent;
  let fixture: ComponentFixture<EditUserDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
