var assert = require('assert'),
    SuperMemo2 = require('../src/SuperMemo2.js'),
    chai = require('chai');

suite('SuperMemo2', function(){
    setup(function(){
        this.superMemo2 = new SuperMemo2();
    });

    test('For quality 4 the eassiness factor doesn\'t change', function(){
      assert.equal(2.5, this.superMemo2.calculateEassinessFactor(2.5, 4));
    });

    test('For quality less and more than 4 the eassiness factor change', function(){
      assert.notEqual(2.5, this.superMemo2.calculateEassinessFactor(1.5, 5));
      assert.notEqual(2.5, this.superMemo2.calculateEassinessFactor(2.5, 3));
    });

    test('If quality or efactor params are not valid throws exception', function(){
        chai.expect(function(){this.superMemo2.calculateEassinessFactor(6, 5);}.bind(this)).to.throw(Error);
        chai.expect(function(){this.superMemo2.calculateEassinessFactor(2, -1);}.bind(this)).to.throw(Error);
        chai.expect(function(){this.superMemo2.calculateEassinessFactor(2, 6);}.bind(this)).to.throw(Error);
        chai.expect(function(){this.superMemo2.calculateEassinessFactor(1, 5);}.bind(this)).to.throw(Error);
    });

    test('If efactor is 1.1 and quality 0 the result shold be 1.3', function() {
      assert.equal(1.3, this.superMemo2.calculateEassinessFactor(1.3, 0));
    });

    test('If efactor is 2.5 and quality 5 the result shold be 2.5', function() {
      assert.equal(2.5, this.superMemo2.calculateEassinessFactor(2.5, 5));
    });

    test('We create and item the first efactor must be 2.5', function() {
      let item = this.superMemo2.addItem('book');
      assert.equal(2.5, item.eassinessFactor);
    });

    test('We create and item the first efactor must be 2.5 and the list lenght must be 1', function() {
      let item = this.superMemo2.addItem('book');
      assert.equal(2.5, item.eassinessFactor);
      assert.equal(1, this.superMemo2.items.length);
    });

    
});
