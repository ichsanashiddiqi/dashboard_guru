import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { SiswaModel } from './siswa.model';

@Injectable({
    providedIn: 'root'
  })
  export class SiswaService {
    siswaDetailList: AngularFireList<any>;
    siswaDetail: AngularFireObject<any>;
    constructor(private firebase: AngularFireDatabase) { }
    getSiswa() {
        this.siswaDetailList = this.firebase.list('Siswa' );
        return this.siswaDetailList;
      }
      getSiswaa(id: string) {
        this.siswaDetail = this.firebase.object('Siswa/' + id);
        return this.siswaDetail;
      }

      delete(id: string) {
        this.siswaDetail = this.firebase.object('Siswa/'+id);
        this.siswaDetail.remove();
      }

      getNilaiSiswa() {
        this.siswaDetailList = this.firebase.list('Nilai' );
        return this.siswaDetailList;
      }

      deleteNilai(id: string) {
        this.siswaDetail = this.firebase.object('Nilai/'+id);
        this.siswaDetail.remove();
      }

      UpdateSiswa(siswaModel: SiswaModel) {
        this.siswaDetail.update({
          nama: siswaModel.nama,
          namalengkap: siswaModel.namalengkap,
          pass: siswaModel.pass
        })
      }  
  }