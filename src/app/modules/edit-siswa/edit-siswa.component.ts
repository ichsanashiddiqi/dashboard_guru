import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { SiswaService } from '../../shared/services/siswa.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { catchError, finalize } from 'rxjs/operators';
import {SoalModel} from '../../shared/services/soal.model';


@Component({
  selector: 'app-edit-siswa',
  templateUrl: './edit-siswa.component.html',
  styleUrls: ['./edit-siswa.component.scss']
})
export class EditSiswaComponent implements OnInit {

  soalModel: SoalModel;
  editForm: FormGroup;  // Define FormGroup to student's edit form
  selectedImage: any = null;
  
  constructor(
    private siswaService: SiswaService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,         // Router service to navigate to specific component
  ){ }

  ngOnInit() {
    this.updateStudentData();   // Call updateStudentData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.siswaService.getSiswaa(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })
  }

  // Accessing form control using getters
  
  // get $key() {
  //   return this.editForm.get('$key');
  // }

  get nama() {
    return this.editForm.get('nama');
  }

  get namalengkap() {
    return this.editForm.get('namalengkap');
  }

  get pass() {
    return this.editForm.get('pass');
  }  

  // Contains Reactive Form logic
  updateStudentData() {
    this.editForm = this.fb.group({
      // $key: ['', Validators.required],
      nama: ['', Validators.required],
      namalengkap: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }


  // Below methods fire when somebody click on submit button
  updateForm(){
    this.siswaService.UpdateSiswa(this.editForm.value);       // Update student data using CRUD API
    this.router.navigate(['edit_soal']);               // Navigate to student's list page when student data is updated
  }

}
