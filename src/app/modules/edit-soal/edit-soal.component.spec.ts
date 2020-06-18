import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoalComponent } from './edit-soal.component';

describe('EditSoalComponent', () => {
  let component: EditSoalComponent;
  let fixture: ComponentFixture<EditSoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
