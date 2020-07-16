import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './components/login/login.component';
import { TambahSoalComponent } from './modules/tambah-soal/tambah-soal.component';
import { EditSoalComponent } from './modules/edit-soal/edit-soal.component';
import { environment } from 'src/environments/environment';
import { AuthService } from "./shared/services/auth.service";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SoalService } from "./shared/services/soal.service";
import { EditComponent } from './modules/edit/edit.component';
import { NilaiSiswaComponent } from './modules/nilai-siswa/nilai-siswa.component';
import { EditSiswaComponent } from './modules/edit-siswa/edit-siswa.component';
import { KontakComponent } from './modules/kontak/kontak.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TambahSoalComponent,
    EditSoalComponent,
    EditComponent,
    NilaiSiswaComponent,
    EditSiswaComponent,
    KontakComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
