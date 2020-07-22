(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar -->\n\n<div style=\"height: 100%;\nmargin: 0;\npadding: 0;\nbackground-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\nbackground-position: center;\nbackground-size: cover;\nbackground-repeat: no-repeat;\nmin-height: 100vh;\nfont-family: 'Roboto', sans-serif;\">\n<mat-toolbar color=\"primary\" class=\"app-header\">\n  <div><a href=\"\" target=\"_blank\" class=\"positronx\">LUPA PASSWORD</a></div>\n  <span class=\"nav-tool-items\">\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/register-user\" routerLinkActive=\"active\">Sign-Up</a>\n  </span>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n  <div class=\"col-md-4\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-info\">\n        <h4 class=\"card-title\">Reset Password</h4>\n        <p class=\"card-category\">Silakan memasukkan alamat e-mail Anda untuk meminta pengaturan ulang kata sandi.</p>\n    </div>\n    <div class=\"card-body\">\n    \n    \n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email Address\" class=\"formControl\" #passwordResetEmail required>\n        </mat-form-field>\n      </mat-card-content>\n      <button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" value=\"Reset Password\" \n      (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">Reset Password</button>\n\n      <div class=\"redirectToLogin\">\n        <span>Kembali ke halaman login? <span class=\"redirect\" routerLink=\"/login\">Log In</span></span>\n      </div>\n      \n  </div>\n  </div>\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar -->\n\n<div style=\"height: 100%;\nmargin: 0;\npadding: 0;\nbackground-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\nbackground-position: center;\nbackground-size: cover;\nbackground-repeat: no-repeat;\nmin-height: 100vh;\nfont-family: 'Roboto', sans-serif;\">\n<mat-toolbar color=\"primary\" class=\"app-header\">\n  <div><a href=\"\" target=\"_blank\" class=\"positronx\">LOGIN</a></div>\n  <span class=\"nav-tool-items\">\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/register-user\" routerLinkActive=\"active\">Sign-Up</a>\n  </span>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n  <div class=\"col-md-4\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-info\">\n        <h4 class=\"card-title\">LOGIN</h4>\n        <p class=\"card-category\">Login Dashboard</p>\n    </div>\n    <div class=\"card-body\">\n    \n    \n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" class=\"formControl\" #userName required>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Password\" class=\"formControl\" #userPassword required type=\"password\">\n        </mat-form-field>\n      </mat-card-content>\n      <button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" value=\"Log in\" \n      (click)=\"authService.SignIn(userName.value, userPassword.value)\">Log in</button>\n      <div class=\"forgotPassword\">\n        <span routerLink=\"/forgot-password\">Forgot Password? Klik Disini</span>\n      </div>\n      \n  </div>\n  </div>\n</div>\n</div>\n</div>\n\n\n\n\n\n      \n  \n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sign-up/sign-up.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sign-up/sign-up.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar -->\n\n<div style=\"height: 100%;\nmargin: 0;\npadding: 0;\nbackground-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\nbackground-position: center;\nbackground-size: cover;\nbackground-repeat: no-repeat;\nmin-height: 100vh;\nfont-family: 'Roboto', sans-serif;\">\n<mat-toolbar color=\"primary\" class=\"app-header\">\n  <div><a href=\"\" target=\"_blank\" class=\"positronx\">SIGN UP</a></div>\n  <span class=\"nav-tool-items\">\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/register-user\" routerLinkActive=\"active\">Sign-Up</a>\n  </span>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n  <div class=\"col-md-4\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-info\">\n        <h4 class=\"card-title\">Sign-Up</h4>\n        <p class=\"card-category\">Sign-Up Dashboard</p>\n    </div>\n    <div class=\"card-body\">\n    \n    \n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" class=\"formControl\" #userEmail required>\n        </mat-form-field>\n        <!-- <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Nama\" class=\"formControl\" #name required>\n        </mat-form-field> -->\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Password\" class=\"formControl\" #userPwd required type=\"password\">\n        </mat-form-field>\n      </mat-card-content>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n      <button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" value=\"Sign Up\" \n      (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">Sign-Up</button>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/verify-email/verify-email.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/verify-email/verify-email.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;\nmargin: 0;\npadding: 0;\nbackground-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\nbackground-position: center;\nbackground-size: cover;\nbackground-repeat: no-repeat;\nmin-height: 100vh;\nfont-family: 'Roboto', sans-serif;\">\n<mat-toolbar color=\"primary\" class=\"app-header\">\n  <div><a href=\"\" target=\"_blank\" class=\"positronx\">VERIFIKASI EMAIL</a></div>\n  <span class=\"nav-tool-items\">\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n    <a mat-button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" routerLink=\"/register-user\" routerLinkActive=\"active\">Sign-Up</a>\n  </span>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n  <div class=\"col-md-4\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-info\">\n        <h4 class=\"card-title\">Email Verifikasi</h4>\n        <p class=\"card-category\">Terima Kasih telah mendaftar</p>\n    </div>\n    <div class=\"card-body\">\n    \n      <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n        <p class=\"text-center\">Kami telah mengirim email konfirmasi ke <strong>{{user.email}}</strong>.</p>\n        <p class=\"text-center\">\n          Silakan periksa email Anda dan klik tautan untuk memverifikasi alamat email Anda.</p>\n      </div>\n      \n      <button mat-stroked-button color=\"accent\" class=\"btn btn-btn btn-info\" value=\"Reset Password\" \n      (click)=\"authService.SendVerificationMail()\">Kirim Ulang Verifikasi</button>\n\n      <div class=\"redirectToLogin\">\n        <span>Kembali ke halaman login? <span class=\"redirect\" routerLink=\"/login\">Log-In</span></span>\n      </div>\n      \n  </div>\n  </div>\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/default/default.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header (toggleSideBarForMe)=\"sideBarToggler()\"></app-header>\n\n<mat-drawer-container>\n    <mat-drawer mode=\"side\" [opened]=\"sideBarOpen\">\n        <app-sidebar></app-sidebar>\n    </mat-drawer>\n    <mat-drawer-content>\n        <router-outlet></router-outlet>\n    </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card card-profile\">\n        <div class=\"card-avatar\">\n            <a href=\"javascript:void(0)\">\n                <img src=\"../../../assets/img/2020-07-15.jpg\" alt=\"Admin SLB\">\n            </a>\n        </div>\n        <div class=\"card-body\">\n            <div *ngIf=\"authService.userData as user\">\n            <h6 class=\"card-category text-gray\">Admin</h6>\n            <h4 class=\"card-title\">Selamat Datang di Dashboard</h4>\n            <p class=\"card-description\">\n                <!-- User ID: <strong>{{user.uid}}</strong> -->\n                Email: <strong>{{user.email}}</strong>\n                Email Verified: <strong>{{user.emailVerified}}</strong>\n            </p>\n            <a class=\"btn btn-info btn-round\" routerLink=\"/edit_soal\">Edit Soal</a>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/edit-siswa/edit-siswa.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/edit-siswa/edit-siswa.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\">Edit Profile</h4>\n                        <p class=\"card-category\">Complete your profile</p>\n                    </div>\n                    <div class=\"card-body\">\n        <!-- Student's Edit Form -->\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"updateForm()\" novalidate>\n\n              \n              <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n                  <label>Nama</label>\n                  <input type=\"text\" formControlName=\"nama\" class=\"form-control\" required>\n                 \n                </div>\n                <div class=\"col-md-12 mb-3\">\n                  <label>Nama Lengkap</label>\n                  <input type=\"text\" formControlName=\"namalengkap\" class=\"form-control\" required>\n                   </div>\n              <div class=\"col-md-12 mb-3\">\n                <label>Password</label>\n                <input type=\"text\" formControlName=\"pass\" class=\"form-control\" required>\n               </div>\n              </div>\n              <div class=\"form-group text-right\">\n                <button type=\"submit\" class=\"btn btn-info btn-block\" [disabled]=\"!editForm.valid\">Update Siswa</button>\n              </div>\n            \n        </form><!-- Student's Edit Form ends-->\n  </div>\n  </div>\n  </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/edit-soal/edit-soal.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/edit-soal/edit-soal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                \n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title \">Edit Soal</h4>\n                        <p class=\"card-category\"> Edit Soal Aplikasi</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th> \n                                        ID Soal\n                                    </th>\n                                    <th>\n                                        Soal\n                                    </th>\n                                    <th>\n                                        Jawaban\n                                    </th>\n                                    <th>\n                                        Update\n                                    </th>\n                                    <!-- <th>\n                                        Delete\n                                    </th> -->\n                                </thead>\n                                <tbody *ngFor=\"let soalmodel of SoalModel\">\n                                    <tr>\n                                        <th scope=\"row\">{{soalmodel.$key}}</th>\n                                        <td>{{soalmodel.question}}</td>\n                                        <td>{{soalmodel.answer}}</td>                \n                                        <td><button type=\"button\" class=\"btn btn-warning\" routerLink=\"/edit/{{soalmodel.$key}}\">Update</button></td>\n                                        <!-- <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"ondelete(soalmodel)\">Delete</button></td> -->\n                                      </tr>\n                                </tbody>    \n                            </table>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/edit/edit.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/edit/edit.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\">Edit Soal</h4>\n                        <p class=\"card-category\">Masukan Soal</p>\n                    </div>\n                    <div class=\"card-body\">\n        <!-- Student's Edit Form -->\n        <h4>Masukan GIF/Gambar klik box dibawah ini</h4>\n        <div class=\"text-center\">\n          <img [src]=\"imgSrc\" width=\"350px\" height=\"250px\" (click)=\"fileUploader.click()\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" [(ngModel)]=\"file\" class=\"form-control\" #fileUploader formControlName=\"url\" (change)=\"showPreview($event)\">\n         <div class=\"text-primary\">This field is required.</div>\n    </div>\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"save()\" novalidate>\n          \n              <!-- <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n                  <label>Video URL</label>\n                  <input type=\"text\" formControlName=\"url\" class=\"form-control\" required>\n                  <p *ngIf=\"url.touched && benar.invalid\" class=\"error\"><sup>*</sup>Please enter first name</p>\n                  <p *ngIf=\"url.errors?.minlength\" class=\"error\"><sup>*</sup>Jawaban Benar</p>\n                </div>\n              </div> -->\n\n              <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n                  <label>Soal</label>\n                  <input type=\"text\" formControlName=\"question\" class=\"form-control\" required>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n                  <label>Jawaban Benar</label>\n                  <input type=\"text\" formControlName=\"answer\" class=\"form-control\" required>\n                  <!-- <p *ngIf=\"benar.touched && benar.invalid\" class=\"error\"><sup>*</sup>Please enter first name</p>\n                  <p *ngIf=\"benar.errors?.minlength\" class=\"error\"><sup>*</sup>Jawaban Benar</p> -->\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n                  <label>Jawaban 1</label>\n                  <input type=\"text\" formControlName=\"option1\" class=\"form-control\" required>\n                  <p *ngIf=\"option1.touched && option1.invalid\" class=\"error\"><sup>*</sup>Please provide jawaban</p>\n                  <p *ngIf=\"option1.errors?.pattern\" class=\"error\"><sup>*</sup>Please enter correct jawaban 1</p>\n                </div>\n                <div class=\"col-md-12 mb-3\">\n                  <label>Jawaban 2</label>\n                  <input type=\"text\" formControlName=\"option2\" class=\"form-control\" required>\n                  <p *ngIf=\"option2.touched && option2.invalid\" class=\"error\"><sup>*</sup>Please provide jawaban</p>\n                  <p *ngIf=\"option2.errors?.pattern\" class=\"error\"><sup>*</sup>Use numbers only number</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n                  <label>Jawaban 3</label>\n                  <input type=\"text\" formControlName=\"option3\" class=\"form-control\" required>\n                  <p *ngIf=\"option3.touched && option3.invalid\" class=\"error\"><sup>*</sup>Please provide jawaban</p>\n                  <p *ngIf=\"option3.errors?.pattern\" class=\"error\"><sup>*</sup>Please enter correct jawaban 3</p>\n                </div>\n                <div class=\"col-md-12 mb-3\">\n                  <label>Jawaban 4</label>\n                  <input type=\"text\" formControlName=\"option4\" class=\"form-control\" required>\n                  <p *ngIf=\"option4.touched && option4.invalid\" class=\"error\"><sup>*</sup>Please provide jawaban</p>\n                  <p *ngIf=\"option4.errors?.pattern\" class=\"error\"><sup>*</sup>Please enter correct jawaban 3</p>\n                </div>\n              </div>\n              <div class=\"form-group text-right\">\n                <button type=\"submit\" class=\"btn btn-info btn-block\" [disabled]=\"!editForm.valid\">Update Soal</button>\n              </div>\n            \n        </form><!-- Student's Edit Form ends-->\n  </div>\n  </div>\n  </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/kontak/kontak.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/kontak/kontak.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card card-profile\">\n        <div class=\"card-avatar\">\n            <a href=\"javascript:void(0)\">\n                <img src=\"../../../assets/img/2020-07-15.jpg\" alt=\"Admin SLB\">\n            </a>\n        </div>\n        <div class=\"card-body\">\n            <!-- <div *ngIf=\"authService.userData as user\"> -->\n            <!-- <h6 class=\"card-category text-gray\">Admin</h6> -->\n            <h4 class=\"card-title\">Alamat</h4>\n            <p><strong>Alamat :</strong> Jl Raya No 7 Ngebruk</p>\n            <p><strong>Desa / Kelurahan :</strong> Jl Raya No 7 Ngebruk</p>\n            <p>\n           <strong> Kecamatan :</strong> Kec. Sumberpucung\n            </p>\n            <p>\n            <strong>Kabupaten :</strong> Kab. Malang\n            </p>\n            <p>\n            <strong>Provinsi :</strong> Prov. Jawa Timur\n            </p>\n            <p>\n            <strong>Kode Pos :</strong> 65165\n            </p>\n            <p class=\"card-description\">\n                <!-- User ID: <strong>{{user.uid}}</strong> -->\n            </p>\n            <a class=\"btn btn-info btn-round\" routerLink=\"/edit_soal\">Edit Soal</a>\n        <!-- </div> -->\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/nilai-siswa/nilai-siswa.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/nilai-siswa/nilai-siswa.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                \n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title \">Nilai Siswa</h4>\n                        <p class=\"card-category\">Seluruh Hasil Siswa Mengerjakan Soal</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th> \n                                        ID\n                                    </th>\n                                    <th>\n                                        Nama Lengkap\n                                    </th>\n                                    <th>\n                                        Nilai\n                                    </th>\n                                    \n                                    <th>\n                                        Delete\n                                    </th>\n                                </thead>\n                                <tbody *ngFor=\"let nilaimodel of NilaiModel\">\n                                    <tr>\n                                        <th scope=\"row\">{{nilaimodel.$key}}</th>\n                                        <td>{{nilaimodel.namalengkapNilai}}</td>\n                                        <td>{{nilaimodel.nilai}}</td>                \n                                        <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"ondelete(nilaimodel)\">Delete</button></td>\n                                      </tr>\n                                </tbody>    \n                            </table>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/posts/posts.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                \n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title \">Edit Akun Siswa</h4>\n                        <p class=\"card-category\"> Edit akun siswa yang telah mendaftar di aplikasi</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th> \n                                        ID\n                                    </th>\n                                    <th>\n                                        Nama\n                                    </th>\n                                    <th>\n                                        Nama Lengkap\n                                    </th>\n                                    <th>\n                                        Password\n                                    </th>\n                                    <th>\n                                        Update\n                                    </th>\n                                    <th>\n                                        Delete\n                                    </th>\n                                </thead>\n                                <tbody *ngFor=\"let siswamodel of SiswaModel\">\n                                    <tr>\n                                        <th scope=\"row\">{{siswamodel.$key}}</th>\n                                        <td>{{siswamodel.nama}}</td>\n                                        <td>{{siswamodel.namalengkap}}</td>          \n                                        <td>{{siswamodel.pass}}</td>     \n                                        <td><button type=\"button\" class=\"btn btn-warning\" routerLink=\"/edit_siswa/{{siswamodel.$key}}\">Update</button></td>\n                                        <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"ondelete(siswamodel)\">Delete</button></td>\n                                      </tr>\n                                </tbody>    \n                            </table>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-divider></mat-divider>\n<footer>\n    &copy; All rights reserved 2019\n</footer> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"toggleSideBar()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <span>Dashboard</span>\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n            <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\n                \n                <li>\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\n                        <mat-icon>person_outline</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item routerLink=\"/login\">\n                            <mat-icon>exit_to_app</mat-icon>\n                            Sign out\n                        </button>\n                    </mat-menu>\n\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <div class=\"profile-card\">\n        <div class=\"header\">\n            \n            <div class=\"row\" *ngIf=\"authService.userData as user\">\n                <div class=\"col-md-12\">\n                  <div class=\"media\">\n                      \n                    <!-- <img class=\"align-self-start mr-5 img-thumbnail rounded-circle\" src=\"{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}\"\n                      alt=\"{{user.displayName}}\"> -->\n                    <div class=\"media-body\">\n                        <p><img src=\"../../../assets/img/2020-07-15.jpg\" alt=\"Admin SLB\"></p>\n                      <!-- <h1>Hello: <strong>{{(user.displayName) ? user.displayName : 'User'}}</strong></h1> -->\n                      <!-- <p>User ID: <strong>{{user.uid}}</strong></p> -->\n                      <p>Email: <strong>{{user.email}}</strong></p>\n                      <p>Email Verified: <strong>{{user.emailVerified}}</strong></p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n        </div>\n    </div>\n\n    <mat-divider></mat-divider>\n\n    <h2 matSubheader>Pages</h2>\n\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/dashboard\">Dashboard</a>\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/posts\">Data Siswa</a>\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/edit_soal\">Edit Soal</a>\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/nilai_siswa\">Nilai Siswa</a>\n\n\n    <mat-divider></mat-divider>\n\n    <h2 matSubheader>Tools</h2>\n\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/kontak\">\n        <mat-icon>import_contacts</mat-icon>\n        Tentang Sekolah\n    </a>\n\n</mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/area/area.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block;\"></highcharts-chart>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/card/card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\n    <h4>{{ label }}</h4>\n\n    <span class=\"total\">{{ total }}</span>\n\n    <span>\n        <mat-icon color=\"primary\">trending_up</mat-icon>\n    </span>\n\n    <span class=\"description\">\n        {{ percentage }}%\n    </span>\n\n    <span> of target</span>\n</div>\n<div class=\"widget\">\n    <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\n        style=\"width: 100%; height: 60px; display: block;\">\n    </highcharts-chart>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/pie/pie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\" style=\"width: 100%; display: block;\">\n</highcharts-chart>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/app/components/verify-email/verify-email.component.ts");
/* harmony import */ var _app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _modules_edit_soal_edit_soal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/edit-soal/edit-soal.component */ "./src/app/modules/edit-soal/edit-soal.component.ts");
/* harmony import */ var _modules_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/edit/edit.component */ "./src/app/modules/edit/edit.component.ts");
/* harmony import */ var _modules_nilai_siswa_nilai_siswa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/nilai-siswa/nilai-siswa.component */ "./src/app/modules/nilai-siswa/nilai-siswa.component.ts");
/* harmony import */ var _modules_edit_siswa_edit_siswa_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/edit-siswa/edit-siswa.component */ "./src/app/modules/edit-siswa/edit-siswa.component.ts");
/* harmony import */ var _modules_kontak_kontak_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/kontak/kontak.component */ "./src/app/modules/kontak/kontak.component.ts");
















var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register-user', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] },
    { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"] },
    { path: 'verify-email-address', component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailComponent"] },
    {
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
        children: [{
                path: 'dashboard', canActivate: [_app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            }, {
                path: 'posts',
                component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
            },
            {
                path: 'edit_soal',
                component: _modules_edit_soal_edit_soal_component__WEBPACK_IMPORTED_MODULE_11__["EditSoalComponent"]
            },
            {
                path: 'edit/:id',
                component: _modules_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"]
            },
            {
                path: 'nilai_siswa',
                component: _modules_nilai_siswa_nilai_siswa_component__WEBPACK_IMPORTED_MODULE_13__["NilaiSiswaComponent"]
            },
            {
                path: 'edit_siswa/:id',
                component: _modules_edit_siswa_edit_siswa_component__WEBPACK_IMPORTED_MODULE_14__["EditSiswaComponent"]
            },
            {
                path: 'kontak',
                component: _modules_kontak_kontak_component__WEBPACK_IMPORTED_MODULE_15__["KontakComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _modules_edit_soal_edit_soal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/edit-soal/edit-soal.component */ "./src/app/modules/edit-soal/edit-soal.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var _modules_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/edit/edit.component */ "./src/app/modules/edit/edit.component.ts");
/* harmony import */ var _modules_nilai_siswa_nilai_siswa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/nilai-siswa/nilai-siswa.component */ "./src/app/modules/nilai-siswa/nilai-siswa.component.ts");
/* harmony import */ var _modules_edit_siswa_edit_siswa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/edit-siswa/edit-siswa.component */ "./src/app/modules/edit-siswa/edit-siswa.component.ts");
/* harmony import */ var _modules_kontak_kontak_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/kontak/kontak.component */ "./src/app/modules/kontak/kontak.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _modules_edit_soal_edit_soal_component__WEBPACK_IMPORTED_MODULE_11__["EditSoalComponent"],
                _modules_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"],
                _modules_nilai_siswa_nilai_siswa_component__WEBPACK_IMPORTED_MODULE_16__["NilaiSiswaComponent"],
                _modules_edit_siswa_edit_siswa_component__WEBPACK_IMPORTED_MODULE_17__["EditSiswaComponent"],
                _modules_kontak_kontak_component__WEBPACK_IMPORTED_MODULE_18__["KontakComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_9__["DefaultModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/components/forgot-password/forgot-password.component.scss")]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/components/sign-up/sign-up.component.scss")]
        })
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/verify-email/verify-email.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/verify-email/verify-email.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/verify-email/verify-email.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/verify-email/verify-email.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/app/components/verify-email/verify-email.component.scss")]
        })
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/layouts/default/default.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\nmat-drawer {\n  width: 350px; }\n\nmat-drawer-container {\n  height: 100%; }\n\nmat-drawer-content {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0M6XFxVc2Vyc1xcenp6XFxEb2N1bWVudHNcXExhcG9yYW4gQWtoaXJcXFBlcmNvYmFhblxcZGFzaGJvYXJkX2d1cnUvc3JjXFxhcHBcXGxheW91dHNcXGRlZmF1bHRcXGRlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.sideBarOpen = true;
    }
    DefaultComponent.prototype.ngOnInit = function () { };
    DefaultComponent.prototype.sideBarToggler = function () {
        this.sideBarOpen = !this.sideBarOpen;
    };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/layouts/default/default.component.scss")]
        })
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/dashboard.service */ "./src/app/modules/dashboard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var src_app_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/verify-email/verify-email.component */ "./src/app/components/verify-email/verify-email.component.ts");
/* harmony import */ var src_app_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
















var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
                src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"],
                src_app_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
                src_app_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPasswordComponent"],
                src_app_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_14__["VerifyEmailComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            ],
            providers: [
                src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"]
            ]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.bigChart = function () {
        return [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }];
    };
    DashboardService.prototype.cards = function () {
        return [71, 78, 39, 66];
    };
    DashboardService.prototype.pieChart = function () {
        return [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }];
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stats-cards .mat-card {\n  overflow: hidden; }\n\ntable {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvQzpcXFVzZXJzXFx6enpcXERvY3VtZW50c1xcTGFwb3JhbiBBa2hpclxcUGVyY29iYWFuXFxkYXNoYm9hcmRfZ3VydS9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHMtY2FyZHMge1xuICAubWF0LWNhcmQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.bigChart = this.dashboardService.bigChart();
        // this.cards = this.dashboardService.cards();
        // this.pieChart = this.dashboardService.pieChart();
        // this.dataSource.paginator = this.paginator;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/edit-siswa/edit-siswa.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/edit-siswa/edit-siswa.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWRpdC1zaXN3YS9lZGl0LXNpc3dhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/edit-siswa/edit-siswa.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/edit-siswa/edit-siswa.component.ts ***!
  \************************************************************/
/*! exports provided: EditSiswaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSiswaComponent", function() { return EditSiswaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_siswa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/siswa.service */ "./src/app/shared/services/siswa.service.ts");



 // ActivatedRoue is used to get the current associated components information.

var EditSiswaComponent = /** @class */ (function () {
    function EditSiswaComponent(siswaService, // Inject CRUD API in constructor
    fb, // Inject Form Builder service for Reactive forms
    actRoute, // Activated route to get the current component's inforamation
    router) {
        this.siswaService = siswaService;
        this.fb = fb;
        this.actRoute = actRoute;
        this.router = router;
        this.selectedImage = null;
    }
    EditSiswaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateStudentData(); // Call updateStudentData() as soon as the component is ready 
        var id = this.actRoute.snapshot.paramMap.get('id'); // Getting current component's id or information using ActivatedRoute service
        this.siswaService.getSiswaa(id).valueChanges().subscribe(function (data) {
            _this.editForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
        });
    };
    Object.defineProperty(EditSiswaComponent.prototype, "nama", {
        // Accessing form control using getters
        get: function () {
            return this.editForm.get('nama');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSiswaComponent.prototype, "namalengkap", {
        get: function () {
            return this.editForm.get('namalengkap');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSiswaComponent.prototype, "pass", {
        get: function () {
            return this.editForm.get('pass');
        },
        enumerable: true,
        configurable: true
    });
    // Contains Reactive Form logic
    EditSiswaComponent.prototype.updateStudentData = function () {
        this.editForm = this.fb.group({
            nama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            namalengkap: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    // Below methods fire when somebody click on submit button
    EditSiswaComponent.prototype.updateForm = function () {
        this.siswaService.UpdateSiswa(this.editForm.value); // Update student data using CRUD API
        this.router.navigate(['posts']); // Navigate to student's list page when student data is updated
    };
    EditSiswaComponent.ctorParameters = function () { return [
        { type: _shared_services_siswa_service__WEBPACK_IMPORTED_MODULE_4__["SiswaService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EditSiswaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-siswa',
            template: __webpack_require__(/*! raw-loader!./edit-siswa.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/edit-siswa/edit-siswa.component.html"),
            styles: [__webpack_require__(/*! ./edit-siswa.component.scss */ "./src/app/modules/edit-siswa/edit-siswa.component.scss")]
        })
    ], EditSiswaComponent);
    return EditSiswaComponent;
}());



/***/ }),

/***/ "./src/app/modules/edit-soal/edit-soal.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/edit-soal/edit-soal.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWRpdC1zb2FsL2VkaXQtc29hbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/edit-soal/edit-soal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/edit-soal/edit-soal.component.ts ***!
  \**********************************************************/
/*! exports provided: EditSoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSoalComponent", function() { return EditSoalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_soal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/soal.service */ "./src/app/shared/services/soal.service.ts");



var EditSoalComponent = /** @class */ (function () {
    function EditSoalComponent(soalService) {
        this.soalService = soalService;
        this.hideWhenNoStudent = false; // Hide students data table when no student.
        this.noData = false; // Showing No Student Message, when no student in database.
        this.preLoader = true;
    }
    EditSoalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.soalService.getImageDetailList();
        x.snapshotChanges().subscribe(function (item) {
            _this.SoalModel = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.SoalModel.push(y);
            });
        });
    };
    EditSoalComponent.prototype.dataState = function () {
        var _this = this;
        this.soalService.getImageDetailList().valueChanges().subscribe(function (data) {
            _this.preLoader = false;
            if (data.length <= 0) {
                _this.hideWhenNoStudent = false;
                _this.noData = true;
            }
            else {
                _this.hideWhenNoStudent = true;
                _this.noData = false;
            }
        });
    };
    EditSoalComponent.prototype.ondelete = function (soalmodel) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.soalService.delete(soalmodel.$key);
        }
    };
    EditSoalComponent.ctorParameters = function () { return [
        { type: _shared_services_soal_service__WEBPACK_IMPORTED_MODULE_2__["SoalService"] }
    ]; };
    EditSoalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-soal',
            template: __webpack_require__(/*! raw-loader!./edit-soal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/edit-soal/edit-soal.component.html"),
            styles: [__webpack_require__(/*! ./edit-soal.component.scss */ "./src/app/modules/edit-soal/edit-soal.component.scss")]
        })
    ], EditSoalComponent);
    return EditSoalComponent;
}());



/***/ }),

/***/ "./src/app/modules/edit/edit.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/edit/edit.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_soal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/soal.service */ "./src/app/shared/services/soal.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



 // ActivatedRoue is used to get the current associated components information.



var EditComponent = /** @class */ (function () {
    function EditComponent(crudApi, // Inject CRUD API in constructor
    fb, // Inject Form Builder service for Reactive forms
    actRoute, // Activated route to get the current component's inforamation
    router, storage) {
        this.crudApi = crudApi;
        this.fb = fb;
        this.actRoute = actRoute;
        this.router = router;
        this.storage = storage;
        this.selectedImage = null;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateStudentData(); // Call updateStudentData() as soon as the component is ready 
        var id = this.actRoute.snapshot.paramMap.get('id'); // Getting current component's id or information using ActivatedRoute service
        this.crudApi.GetStudent(id).valueChanges().subscribe(function (data) {
            _this.editForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
        });
    };
    EditComponent.prototype.showPreview = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { return _this.imgSrc = e.target.result; };
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        }
        else {
            this.imgSrc = 'src/assets/img/save.png';
            this.selectedImage = null;
        }
    };
    // Accessing form control using getters
    // get url() {
    //   return this.editForm.get('url');
    // }
    EditComponent.prototype.resetForm = function () {
        this.imgSrc = 'src/assets/img/save.png';
    };
    Object.defineProperty(EditComponent.prototype, "question", {
        get: function () {
            return this.editForm.get('questionn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "answer", {
        get: function () {
            return this.editForm.get('answer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "option1", {
        get: function () {
            return this.editForm.get('option1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "option2", {
        get: function () {
            return this.editForm.get('option2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "option3", {
        get: function () {
            return this.editForm.get('option3');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "option4", {
        get: function () {
            return this.editForm.get('option4');
        },
        enumerable: true,
        configurable: true
    });
    // Contains Reactive Form logic
    EditComponent.prototype.updateStudentData = function () {
        this.editForm = this.fb.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            option1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            option2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            option3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            option4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        if (this.selectedImage == null) {
            this.crudApi.UpdateStudent(this.editForm.value); // Update student data using CRUD API
            this.router.navigate(['edit_soal']);
        }
        else {
            var name = this.selectedImage.name;
            var fileRef_1 = this.storage.ref(name);
            this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                fileRef_1.getDownloadURL().subscribe(function (url) {
                    // this.soalModel.$key = this.id;
                    _this.editForm.value.url = url;
                    _this.crudApi.UpdateStudent(_this.editForm.value);
                    _this.router.navigate(['edit_soal']);
                    alert('Upload Successful');
                });
            })).subscribe();
        }
    };
    EditComponent.ctorParameters = function () { return [
        { type: _shared_services_soal_service__WEBPACK_IMPORTED_MODULE_4__["SoalService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/modules/edit/edit.component.scss")]
        })
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/modules/kontak/kontak.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/kontak/kontak.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMva29udGFrL2tvbnRhay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/kontak/kontak.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/kontak/kontak.component.ts ***!
  \****************************************************/
/*! exports provided: KontakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontakComponent", function() { return KontakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KontakComponent = /** @class */ (function () {
    function KontakComponent() {
    }
    KontakComponent.prototype.ngOnInit = function () {
    };
    KontakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kontak',
            template: __webpack_require__(/*! raw-loader!./kontak.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/kontak/kontak.component.html"),
            styles: [__webpack_require__(/*! ./kontak.component.scss */ "./src/app/modules/kontak/kontak.component.scss")]
        })
    ], KontakComponent);
    return KontakComponent;
}());



/***/ }),

/***/ "./src/app/modules/nilai-siswa/nilai-siswa.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/nilai-siswa/nilai-siswa.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmlsYWktc2lzd2EvbmlsYWktc2lzd2EuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/nilai-siswa/nilai-siswa.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/nilai-siswa/nilai-siswa.component.ts ***!
  \**************************************************************/
/*! exports provided: NilaiSiswaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NilaiSiswaComponent", function() { return NilaiSiswaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_siswa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/siswa.service */ "./src/app/shared/services/siswa.service.ts");



var NilaiSiswaComponent = /** @class */ (function () {
    function NilaiSiswaComponent(siswaService) {
        this.siswaService = siswaService;
        this.hideWhenNoStudent = false; // Hide students data table when no student.
        this.noData = false; // Showing No Student Message, when no student in database.
        this.preLoader = true;
    }
    NilaiSiswaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.siswaService.getNilaiSiswa();
        x.snapshotChanges().subscribe(function (item) {
            _this.NilaiModel = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.NilaiModel.push(y);
            });
        });
    };
    NilaiSiswaComponent.prototype.dataState = function () {
        var _this = this;
        this.siswaService.getNilaiSiswa().valueChanges().subscribe(function (data) {
            _this.preLoader = false;
            if (data.length <= 0) {
                _this.hideWhenNoStudent = false;
                _this.noData = true;
            }
            else {
                _this.hideWhenNoStudent = true;
                _this.noData = false;
            }
        });
    };
    NilaiSiswaComponent.prototype.ondelete = function (nilaimodel) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.siswaService.deleteNilai(nilaimodel.$key);
        }
    };
    NilaiSiswaComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_siswa_service__WEBPACK_IMPORTED_MODULE_2__["SiswaService"] }
    ]; };
    NilaiSiswaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nilai-siswa',
            template: __webpack_require__(/*! raw-loader!./nilai-siswa.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/nilai-siswa/nilai-siswa.component.html"),
            styles: [__webpack_require__(/*! ./nilai-siswa.component.scss */ "./src/app/modules/nilai-siswa/nilai-siswa.component.scss")]
        })
    ], NilaiSiswaComponent);
    return NilaiSiswaComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/posts/posts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/posts/posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_siswa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/siswa.service */ "./src/app/shared/services/siswa.service.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(siswaService) {
        this.siswaService = siswaService;
        this.hideWhenNoStudent = false; // Hide students data table when no student.
        this.noData = false; // Showing No Student Message, when no student in database.
        this.preLoader = true;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.siswaService.getSiswa();
        x.snapshotChanges().subscribe(function (item) {
            _this.SiswaModel = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.SiswaModel.push(y);
            });
        });
    };
    PostsComponent.prototype.dataState = function () {
        var _this = this;
        this.siswaService.getSiswa().valueChanges().subscribe(function (data) {
            _this.preLoader = false;
            if (data.length <= 0) {
                _this.hideWhenNoStudent = false;
                _this.noData = true;
            }
            else {
                _this.hideWhenNoStudent = true;
                _this.noData = false;
            }
        });
    };
    PostsComponent.prototype.ondelete = function (siswamodel) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.siswaService.delete(siswamodel.$key);
        }
    };
    PostsComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_siswa_service__WEBPACK_IMPORTED_MODULE_2__["SiswaService"] }
    ]; };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/modules/posts/posts.component.scss")]
        })
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcenp6XFxEb2N1bWVudHNcXExhcG9yYW4gQWtoaXJcXFBlcmNvYmFhblxcZGFzaGJvYXJkX2d1cnUvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  list-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcenp6XFxEb2N1bWVudHNcXExhcG9yYW4gQWtoaXJcXFBlcmNvYmFhblxcZGFzaGJvYXJkX2d1cnUvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleSideBar = function () {
        this.toggleSideBarForMe.emit();
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "toggleSideBarForMe", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-icon {\n  vertical-align: middle;\n  margin-right: 20px; }\n\n:host .profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px; }\n\n:host .profile-card img {\n    width: 100px;\n    height: 100px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXHp6elxcRG9jdW1lbnRzXFxMYXBvcmFuIEFraGlyXFxQZXJjb2JhYW5cXGRhc2hib2FyZF9ndXJ1L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBSHRCO0VBTUksa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQVA3QjtJQVNNLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLm1hdC1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICAucHJvZmlsZS1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ROUTES = [];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['login']);
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.currentUser.then(function (u) { return u.sendEmailVerification(); })
            .then(function () {
            _this.router.navigate(['verify-email-address']);
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
            window.alert('email/password salah');
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out 
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['login']);
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/siswa.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/siswa.service.ts ***!
  \**************************************************/
/*! exports provided: SiswaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiswaService", function() { return SiswaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");



var SiswaService = /** @class */ (function () {
    function SiswaService(firebase) {
        this.firebase = firebase;
    }
    SiswaService.prototype.getSiswa = function () {
        this.siswaDetailList = this.firebase.list('Siswa');
        return this.siswaDetailList;
    };
    SiswaService.prototype.getSiswaa = function (id) {
        this.siswaDetail = this.firebase.object('Siswa/' + id);
        return this.siswaDetail;
    };
    SiswaService.prototype.delete = function (id) {
        this.siswaDetail = this.firebase.object('Siswa/' + id);
        this.siswaDetail.remove();
    };
    SiswaService.prototype.getNilaiSiswa = function () {
        this.siswaDetailList = this.firebase.list('Nilai');
        return this.siswaDetailList;
    };
    SiswaService.prototype.deleteNilai = function (id) {
        this.siswaDetail = this.firebase.object('Nilai/' + id);
        this.siswaDetail.remove();
    };
    SiswaService.prototype.UpdateSiswa = function (siswaModel) {
        this.siswaDetail.update({
            nama: siswaModel.nama,
            namalengkap: siswaModel.namalengkap,
            pass: siswaModel.pass
        });
    };
    SiswaService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    SiswaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SiswaService);
    return SiswaService;
}());



/***/ }),

/***/ "./src/app/shared/services/soal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/soal.service.ts ***!
  \*************************************************/
/*! exports provided: SoalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoalService", function() { return SoalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");



var SoalService = /** @class */ (function () {
    function SoalService(firebase) {
        this.firebase = firebase;
        this.dataSet = {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: '',
            url: ''
        };
        this.msg = 'error';
    }
    SoalService.prototype.getImageDetailList = function () {
        this.imageDetailList = this.firebase.list('Questions');
        return this.imageDetailList;
    };
    SoalService.prototype.insertImageDetails = function (url, question, option1, option2, option3, option4, answer) {
        this.dataSet = {
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: answer,
            url: url
        };
        this.imageDetailList.push(this.dataSet);
    };
    SoalService.prototype.updateImageDetails = function (url, question, option1, option2, option3, option4, answer) {
        this.dataSet = {
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: answer,
            url: url
        };
        this.imageDetail.update(this.dataSet);
    };
    SoalService.prototype.getImage = function (value) {
        var _this = this;
        this.imageDetailList.snapshotChanges().subscribe(function (list) {
            _this.fileList = list.map(function (item) { return item.payload.val(); });
            _this.fileList.forEach(function (element) {
                if (element.id === value)
                    _this.msg = element.url;
            });
            if (_this.msg === 'error')
                alert('No record found');
            else {
                window.open(_this.msg);
                _this.msg = 'error';
            }
        });
    };
    SoalService.prototype.update = function (soalModel) {
        return this.firebase.object('/Questions/' + soalModel.$key).update(soalModel);
    };
    // Fetch Single Student Object
    SoalService.prototype.GetStudent = function (id) {
        this.imageDetail = this.firebase.object('Questions/' + id);
        return this.imageDetail;
    };
    // // Fetch Students List
    // GetStudentsList() {
    //   this.imageDetailList = this.firebase.list('soalDetail');
    //   return this.imageDetailList;
    // }  
    // Update Student Object
    SoalService.prototype.UpdateStudent = function (soalModel) {
        this.imageDetail.update({
            question: soalModel.question,
            option1: soalModel.option1,
            option2: soalModel.option2,
            option3: soalModel.option3,
            option4: soalModel.option4,
            answer: soalModel.answer,
            url: soalModel.url
        });
    };
    SoalService.prototype.delete = function (id) {
        this.imageDetail = this.firebase.object('Questions/' + id);
        this.imageDetail.remove();
    };
    SoalService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    SoalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SoalService);
    return SoalService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/area/area.component */ "./src/app/shared/widgets/area/area.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/card/card.component */ "./src/app/shared/widgets/card/card.component.ts");
/* harmony import */ var _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/pie/pie.component */ "./src/app/shared/widgets/pie/pie.component.ts");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
                _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
                _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
                _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
                _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.ts ***!
  \*******************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var AreaComponent = /** @class */ (function () {
    function AreaComponent() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    AreaComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Random DATA'
            },
            subtitle: {
                text: 'Demo'
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: this.data
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AreaComponent.prototype, "data", void 0);
    AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-area',
            template: __webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html"),
            styles: [__webpack_require__(/*! ./area.component.scss */ "./src/app/shared/widgets/area/area.component.scss")]
        })
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.total {\n  font-size: 3em; }\n\n.mat-icon,\n.description {\n  color: green;\n  font-size: 2em; }\n\n.mat-icon {\n  position: relative;\n  padding: 0 20px;\n  top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9DOlxcVXNlcnNcXHp6elxcRG9jdW1lbnRzXFxMYXBvcmFuIEFraGlyXFxQZXJjb2JhYW5cXGRhc2hib2FyZF9ndXJ1L3NyY1xcYXBwXFxzaGFyZWRcXHdpZGdldHNcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7RUFFRSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4ubWF0LWljb24sXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ubWF0LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgdG9wOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    CardComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                type: 'area',
                backgroundColor: null,
                borderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: true,
                outside: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "percentage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "data", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/widgets/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
        this.data = [];
    }
    PieComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'RANDOM DATA'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PieComponent.prototype, "data", void 0);
    PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-pie',
            template: __webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/shared/widgets/pie/pie.component.scss")]
        })
    ], PieComponent);
    return PieComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    firebaseConfig: {
        apiKey: "AIzaSyD4sryfTK6sXX9NMrr_Ax2iTr3OTeiG7AE",
        authDomain: "bhs-isyarat-efad6.firebaseapp.com",
        databaseURL: "https://bhs-isyarat-efad6.firebaseio.com",
        projectId: "bhs-isyarat-efad6",
        storageBucket: "bhs-isyarat-efad6.appspot.com",
        messagingSenderId: "345546944352",
        appId: "1:345546944352:web:e8df8252719d6e79c53805"
    },
    production: false,
    create: 'https://us-central1-bhs-isyarat-efad6.cloudfunctions.net/app/api/create',
    readId: 'https://us-central1-bhs-isyarat-efad6.cloudfunctions.net/app/api/read/',
    readAll: 'https://us-central1-bhs-isyarat-efad6.cloudfunctions.net/app/api/read',
    update: 'https://us-central1-bhs-isyarat-efad6.cloudfunctions.net/app/api/update/',
    delete: 'https://us-central1-bhs-isyarat-efad6.cloudfunctions.net/app/api/delete/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zzz\Documents\Laporan Akhir\Percobaan\dashboard_guru\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map