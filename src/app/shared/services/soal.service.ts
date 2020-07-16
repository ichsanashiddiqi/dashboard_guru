import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { SoalModel } from './soal.model';

@Injectable({
  providedIn: 'root'
})
export class SoalService {
  imageDetailList: AngularFireList<any>;
  imageDetail: AngularFireObject<any>;
  fileList: any[];

  dataSet: Data = {
    question:'',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    url:''
  };
  msg:string = 'error';
  constructor(private firebase: AngularFireDatabase) { }
  getImageDetailList() {
    this.imageDetailList = this.firebase.list('Questions' );
    return this.imageDetailList;
  }
  insertImageDetails(url,question, option1, option2, option3, option4, answer) {
    this.dataSet = {
      question : question,
      option1 : option1,
      option2 : option2,
      option3 : option3,
      option4 : option4,
      answer : answer,
      url: url
    };
    this.imageDetailList.push(this.dataSet);
  }

  updateImageDetails(url,question, option1, option2, option3, option4, answer) {
    this.dataSet = {
      question : question,
      option1 : option1,
      option2 : option2,
      option3 : option3,
      option4 : option4,
      answer : answer,
      url: url
    };
    this.imageDetail.update(this.dataSet);
  }

  getImage(value){
    this.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val();  });
        this.fileList.forEach(element => {
          if(element.id===value)
          this.msg = element.url;
        });
        if(this.msg==='error')
          alert('No record found');
        else{
          window.open(this.msg);
          this.msg = 'error';
        }
      }
    );
  }


  update(soalModel: SoalModel): Promise<any> {
    return this.firebase.object('/Questions/' + soalModel.$key).update(soalModel);
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.imageDetail = this.firebase.object('Questions/' + id);
    return this.imageDetail;
  }

  // // Fetch Students List
  // GetStudentsList() {
  //   this.imageDetailList = this.firebase.list('soalDetail');
  //   return this.imageDetailList;
  // }  

  // Update Student Object
  UpdateStudent(soalModel: SoalModel) {
    this.imageDetail.update({
      question : soalModel.question,
      option1 : soalModel.option1,
      option2 : soalModel.option2,
      option3 : soalModel.option3,
      option4 : soalModel.option4,
      answer : soalModel.answer,
      url: soalModel.url
    })
  }  

  delete(id: string) {
    this.imageDetail = this.firebase.object('Questions/'+id);
    this.imageDetail.remove();
  }
}
export interface Data{
  question:string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  url:string;
}
