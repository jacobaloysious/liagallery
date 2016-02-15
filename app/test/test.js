/// <reference path="../../typings/tsd.d.ts" />

'use strict';

var chai  = require('chai'),
expect = chai.expect;

chai.should();


function isEven(num){
    return num % 2 === 0;
}

function add(num1, num2){
    return num1 + num2;
}


describe('Check Even', function(){
    it('should return true when is even', function(){
        isEven(4).should.be.true;
    });
    
    it('should return false when not even', function(){
        expect(isEven(3)).to.be.false;
    })
});


describe('CheckAdd', function(){
    var num;
    
    beforeEach(function(){
        num = 5;    
    });
    
    afterEach(function(){
        
    });
    
    it('should return 5', function(){
        num = add(num, 5);
        num.should.equal(10); 
    });
    
   it('should return 12', function(){
        num = add(num, 7);
        num.should.equal(12); 
    });
    
    it.skip('should return 8', function(){
        num = add(num, 7);
        num.should.equal(8); 
    });
});
