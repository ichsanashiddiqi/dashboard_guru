import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSoalComponent } from './tambah-soal.component';

describe('TambahSoalComponent', () => {
  let component: TambahSoalComponent;
  let fixture: ComponentFixture<TambahSoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahSoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahSoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
