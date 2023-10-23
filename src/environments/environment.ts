// This file can be replaced during build by using the fileReplacements array.
// ng build --prod replaces environment.ts with environment.prod.ts.
// The list of file replacements can be found in angular.json.

export const environment = {
  production: false,
  hmr: false,
  stripe: 'pk_test_51O4Om8GxnCYriM4Yt8sXgd49ixQxaqaM26csMLeST3DmBiL28iAqozoQy899FOBfg4PvdN1yFaEOJXPJKeiKNrww00t3SHpS1g',

  apiUrl: 'http://localhost:8888/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as zone.run, zoneDelegate.invokeTask.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.