import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiswaComponent } from './edit-siswa.component';

describe('EditSiswaComponent', () => {
  let component: EditSiswaComponent;
  let fixture: ComponentFixture<EditSiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
