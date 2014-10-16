Clearcode selectpicker directive
=========

Creates dynamic selectpicker - watches change in model and act accordingly

Installation
--------------
``` bower install clearcodeangularjs/cc-selectpicker-directive --save ```


Usage
------

Add ``` cc.selectpicker.directive``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'cc.selectpicker.directive'
    ]);
```
and you are ready to go!

How to use :


```
<select class="selectpicker" ng-model="thingy" ng-options="i for i in awesomeThings"></select>
```



Author
------

TODO


License
----

LGPL

