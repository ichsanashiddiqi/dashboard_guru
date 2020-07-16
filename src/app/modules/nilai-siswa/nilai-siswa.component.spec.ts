import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NilaiSiswaComponent } from './nilai-siswa.component';

describe('NilaiSiswaComponent', () => {
  let component: NilaiSiswaComponent;
  let fixture: ComponentFixture<NilaiSiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NilaiSiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NilaiSiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
