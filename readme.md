# Testing: Ionic 2 with Angular2 Google Maps

This repository purely for the purpose of testing Ionic 2 (currently RC)
with the [Angular 2 Goolge Maps](https://angular-maps.com/) component. 

The following steps were taken to create the app.

First, start new Ionic project:

```shell
ionic start ionic2-google-maps-test blank --ts --v2
```

Add Angular 2 Google Maps (per AGM's [Getting Started Guide](https://angular-maps.com/docs/getting-started.html)):

```shell
npm install angular2-google-maps --save
```

Again, per AGM's [Getting Startd Guide](https://angular-maps.com/docs/getting-started.html#angular2-google-maps-setup), added 
this `AgmCoreModule` to the imports of app.module.ts. See line #5 and #14
from [app.module.ts](https://github.com/smichelotti/ionic2-google-maps-test/blob/master/src/app/app.module.ts).

Upon running `ionic serve`, the following exception is shown in the console:

```shell
[14:36:28]  bundle dev started ...
[14:36:34]  bundle dev failed:  Module c:\temp\ionic2-google-maps-test\node_modules\angular2-google-maps\core\index.js does not export AgmCoreModule (imported by c:\temp\ionic2-google-maps-test\.tmp\app\app.module.js)
[14:36:34]  bundle dev failed:  Module c:\temp\ionic2-google-maps-test\node_modules\angular2-google-maps\core\index.js does not export AgmCoreModule (imported by c:\temp\ionic2-google-maps-test\.tmp\app\app.module.js)
[14:36:34]  Error: Module c:\temp\ionic2-google-maps-test\node_modules\angular2-google-maps\core\index.js does not export AgmCoreModule (imported by c:\temp\ionic2-google-maps-test\.tmp\app\app.module.js)
    at Module.trace (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:7706:29)
    at ModuleScope.findDeclaration (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:7329:22)
    at Scope.findDeclaration (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:5349:39)
    at MemberExpression.bind (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:6695:28)
    at c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:5149:50
    at CallExpression.eachChild (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:5166:5)
    at CallExpression.bind (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:5149:7)
    at CallExpression.bind (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:5850:23)
    at c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:5149:50
    at ArrayExpression.eachChild (c:\temp\ionic2-google-maps-test\node_modules\rollup\dist\rollup.js:5163:19)
```

The app does not show in browser because bundle never get properly built. 
Note: these steps all work fine when using angular-cli (outside of Ionic).