import { Component, OnInit } from '@angular/core';
import { NilaiModel} from 'src/app/shared/services/nilai.model';
import { SiswaService} from 'src/app/shared/services/siswa.service';

@Component({
  selector: 'app-nilai-siswa',
  templateUrl: './nilai-siswa.component.html',
  styleUrls: ['./nilai-siswa.component.scss']
})
export class NilaiSiswaComponent implements OnInit {
  NilaiModel: NilaiModel[];
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true; 
  constructor(private siswaService: SiswaService) { }

  ngOnInit(): void {
    var x = this.siswaService.getNilaiSiswa();
    x.snapshotChanges().subscribe(item => {
      this.NilaiModel = []
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.NilaiModel.push(y as NilaiModel)
      })
    })
  }

  dataState() {     
    this.siswaService.getNilaiSiswa().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }
  
  ondelete(nilaimodel) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.siswaService.deleteNilai(nilaimodel.$key);
    }
  }
}
