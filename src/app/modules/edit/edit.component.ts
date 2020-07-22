import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { SoalService } from '../../shared/services/soal.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { catchError, finalize } from 'rxjs/operators';
import {SoalModel} from '../../shared/services/soal.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  soalModel: SoalModel;
  editForm: FormGroup;  // Define FormGroup to student's edit form
  selectedImage: any = null;
  // url: string;
  imgUrl: string;
  imgSrc: string;
  id;
  constructor(
    private crudApi: SoalService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,     
    private storage: AngularFireStorage,        // Router service to navigate to specific component
  ){ }

  ngOnInit() {
    this.updateStudentData();   // Call updateStudentData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetStudent(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })
  }

  showPreview(event: any) {
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = 'src/assets/img/save.png';
      this.selectedImage = null;
    }
  }
  
  resetForm(){
    this.imgSrc = 'src/assets/img/save.png';
  }
  get question() {
    return this.editForm.get('questionn');
  }

  get answer() {
    return this.editForm.get('answer');
  }

  get option1() {
    return this.editForm.get('option1');
  }

  get option2() {
    return this.editForm.get('option2');
  }  

  get option3() {
    return this.editForm.get('option3');
  }  

  get option4() {
    return this.editForm.get('option4');
  }  
  // Form validasi
  updateStudentData() {
    this.editForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      url: ['', Validators.required],
    })
  }

  save() {
    
    if(this.selectedImage == null){
      this.crudApi.UpdateStudent(this.editForm.value);       // Update student data dengan CRUD API
    this.router.navigate(['edit_soal']); 
    }else{
      var name = this.selectedImage.name;
      const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          // this.soalModel.$key = this.id;
          this.editForm.value.url = url;
          this.crudApi.UpdateStudent(this.editForm.value);
          this.router.navigate(['edit_soal']); 
          alert('Upload Successful');
        })
      })
    ).subscribe();
  }
  }


}
