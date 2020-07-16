import { Component, OnInit } from '@angular/core';
import { SiswaModel} from 'src/app/shared/services/siswa.model';
import { SiswaService} from 'src/app/shared/services/siswa.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  SiswaModel: SiswaModel[];
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true; 
  constructor(private siswaService: SiswaService) { }

  ngOnInit(): void {
    var x = this.siswaService.getSiswa();
    x.snapshotChanges().subscribe(item => {
      this.SiswaModel = []
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.SiswaModel.push(y as SiswaModel)
      })
    })
  }

  dataState() {     
    this.siswaService.getSiswa().valueChanges().subscribe(data => {
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
  
  ondelete(siswamodel) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.siswaService.delete(siswamodel.$key);
    }
  }

}
