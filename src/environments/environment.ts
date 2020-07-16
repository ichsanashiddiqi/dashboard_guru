// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
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
  create : 'https://us-central1-bhs-isyarat-efad6.cloudfunctions.net/app/api/create',
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
