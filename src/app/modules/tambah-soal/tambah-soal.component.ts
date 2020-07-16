import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SoalDetail } from '../../shared/models/soal-detail';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';
import { SoalService } from '../../shared/services/soal.service';
import { catchError, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-tambah-soal',
  templateUrl: './tambah-soal.component.html',
  styleUrls: ['./tambah-soal.component.scss']
})
export class TambahSoalComponent implements OnInit {

  $key:string;
  question:string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  imgSrc: string;
  selectedImage: any = null;
  url:string;
  file:string;

  formTemplate = new FormGroup({
    question: new FormControl('', Validators.required),
    option1: new FormControl('', Validators.required),
    option2: new FormControl('', Validators.required),
    option3: new FormControl('',  Validators.required),
    option4: new FormControl('',  Validators.required),
    answer: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required)
  })
  constructor( @Inject(AngularFireStorage) private storage: AngularFireStorage, @Inject(SoalService) private soalService: SoalService) { }
  ngOnInit() {
    this.soalService.getImageDetailList();
  }
  showPreview(event: any) {
      if(event.target.files && event.target.files[0]){
        const reader = new FileReader();
        reader.onload = (e: any) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
      }
      else{
        this.imgSrc = '../../../assets/img/new_logo.jpg';
        this.selectedImage = null;
      }
    }
  // showPreview(event: any) {
  //   this.selectedImage = event.target.files[0];
  // }
  save() {
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.soalService.insertImageDetails(this.url, this.question, this.option1, this.option2, this.option3, this.option4, this.answer);
          alert('Upload Successful');
        })
      })
    ).subscribe();
  }
  view(){
    this.soalService.getImage(this.file);
  }

  // imgSrc: string;
  // selectedImage: any = null;

  

  // constructor(private storage: AngularFireStorage,
  //             private service: SoalService) { }

  // ngOnInit() {
  //   this.resetForm();
  // }


  // showPreview(event: any) {
  //   if(event.target.files && event.target.files[0]){
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => this.imgSrc = e.target.result;
  //     reader.readAsDataURL(event.target.files[0]);
  //     this.selectedImage = event.target.files[0];
  //   }
  //   else{
  //     this.imgSrc = '../../../assets/img/new_logo.png';
  //     this.selectedImage = null;
  //   }
  // }

  // onSubmit(formValue) {
  //   if(this.formTemplate.valid) {
  //     var filePath = `${formValue.benar}/${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
  //     const fileRef = this.storage.ref(filePath);

  //     this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
  //       finalize(()=>{
  //         fileRef.getDownloadURL().subscribe((url)=>{
  //           formValue['imageUrl']=url;
  //          this.service.insertTambahSoal(formValue);
  //           this.resetForm();
  //         })
  //       })
  //     ).subscribe();
  //   }
  // }

 

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      url: '',
      answer: ''
    });
    this.imgSrc  = '../../../assets/img/new_logo.png';
    this.selectedImage = null;
  }

}
