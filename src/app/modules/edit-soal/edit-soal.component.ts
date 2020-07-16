import { Component, OnInit } from '@angular/core';
import {SoalModel} from '../../shared/services/soal.model';
import { SoalService } from '../../shared/services/soal.service';
@Component({
  selector: 'app-edit-soal',
  templateUrl: './edit-soal.component.html',
  styleUrls: ['./edit-soal.component.scss']
})
export class EditSoalComponent implements OnInit {

  SoalModel: SoalModel[];
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true; 
  constructor(private soalService: SoalService) { }

  ngOnInit(): void {
    var x = this.soalService.getImageDetailList();
    x.snapshotChanges().subscribe(item => {
      this.SoalModel = []
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.SoalModel.push(y as SoalModel)
      })
    })
  }

  dataState() {     
    this.soalService.getImageDetailList().valueChanges().subscribe(data => {
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
  
  ondelete(soalmodel) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.soalService.delete(soalmodel.$key);
    }
  }

}
