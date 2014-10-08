/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-selectpicker-directive.

    cc-selectpicker-directive is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-selectpicker-directive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-selectpicker-directive.  If not, see <http://www.gnu.org/licenses/>.

*/
'use strict';

angular.module('cc.selectpicker.directive')
    .directive('selectpicker', function () {
        return {
            require: ['?ngModel', '?select'],
            restrict: 'C',
            priority: 1,
            link: function postLink($scope, element, attr, ctrls) {
                element.selectpicker();

                var ngModel = ctrls[0],
                    widgetDOM = element.next('.bootstrap-select');

                // Watch for select options change
                $scope.$watch(function(){
                    var a = [];
                    element.children().each(function(){
                        a.push(angular.element(this).attr('value'));
                    });
                    return a;
                }, function(){
                    element.selectpicker('refresh');
                }, true);

                // Watch for ngModel change
                if (ngModel) {
                    $scope.$watch(function () {
                        return ngModel.$modelValue;
                    }, function () {
                        element.selectpicker('refresh');
                    });
                }

                $scope.$on('$destroy', function(){
                    widgetDOM.remove();
                });
            }
        };
    });
