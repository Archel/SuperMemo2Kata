var assert = require('assert');
var SuperMemo2 = require('../src/SuperMemo2.js');

suite('SuperMemo2', function(){
    setup(function(){
        this.superMemo2 = new SuperMemo2();
    });

    test('Has 2.5 of e_factor property on init', function(){
      assert.equal(2.5, this.superMemo2.e_factor);
    });
});
