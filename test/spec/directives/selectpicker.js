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

describe('Directive: selectpicker', function () {

    // load the directive's module
    beforeEach(module('sandboxApp'));

    var $scope, dom;

    beforeEach(inject(function ($rootScope, $compile) {
        $scope = $rootScope.$new();
        $scope.opts = ['v1', 'v2', 'v3'];
        $scope.opt = 'v2';
        dom = $compile('<div><select class="selectpicker" ng-model="opt" ng-options="i for i in opts"></select></div>')($scope);
        $scope.$digest();
    }));

    it('should render dropdown', function(){
        expect(dom.find('.bootstrap-select ul.dropdown-menu li .text').text()).toEqual('v1v2v3');
    });

    it('should render default selected item', function(){
        expect(dom.find('li.selected .text').text()).toEqual('v2');
    });

    describe('when selected item model changed', function(){
        beforeEach(function(){
            $scope.opt = 'v3';
            $scope.$digest();
        });

        it('should render new selection', function(){
            expect(dom.find('li.selected .text').text()).toEqual('v3');
        });
    });

    describe('when avaiable options model changed', function(){
        beforeEach(function(){
            $scope.opts.push('v4');
            $scope.$digest();
        });

        it('should render new set of options', function(){
            expect(dom.find('.bootstrap-select ul.dropdown-menu li .text').text()).toEqual('v1v2v3v4');
        });
    });
});