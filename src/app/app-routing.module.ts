import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthGuard } from "../app/shared/guard/auth.guard";
import { TambahSoalComponent } from './modules/tambah-soal/tambah-soal.component';
import { EditSoalComponent } from './modules/edit-soal/edit-soal.component';
import { EditComponent} from './modules/edit/edit.component';
import { NilaiSiswaComponent } from './modules/nilai-siswa/nilai-siswa.component';
import { EditSiswaComponent } from './modules/edit-siswa/edit-siswa.component';
import { KontakComponent } from './modules/kontak/kontak.component';
const routes: Routes = [

  
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  
  {
  path: '',
  component: DefaultComponent, 
  children: [{
    path: 'dashboard', canActivate: [AuthGuard],
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
{
  path: 'tambah_soal',
  component: TambahSoalComponent
},
{
  path: 'edit_soal',
  component: EditSoalComponent
},
{
  path: 'edit/:id',
  component: EditComponent
},
{
  path: 'nilai_siswa',
  component: NilaiSiswaComponent
},
{
  path: 'edit_siswa/:id',
  component: EditSiswaComponent
},
{
  path: 'kontak',
  component: KontakComponent
}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
