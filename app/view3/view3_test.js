'use strict';

describe('myApp.customers module', function() {

  beforeEach(module('myApp.customers'));

  describe('customers controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var customersCtrl = $controller('CustomersCtrl');
      expect(customersCtrl).toBeDefined();
    }));

  });
});