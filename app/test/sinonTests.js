/// <reference path="../../typings/tsd.d.ts" />

'use strict';

var chai  = require('chai'),
sinon = require('sinon'),
expect = chai.expect;

chai.should();


describe('demo sinon test', function(){
   
   var student;
   beforeEach(function(){
       student = {
           dropClass : function(classId, cb){
               cb();
           }
       };
   });
   
   afterEach(function(){
       
   });
   
   describe('student.sinor', function(){
       
      it('should call the call back', function(){
        var spy = sinon.spy();
        student.dropClass(1, spy);
        spy.called.should.be.true;
      });
       
      it('should call the call back and execute', function(){
        function callBack(){
            console.log("writing to the console");
        }
        var spy = sinon.spy(callBack);
        student.dropClass(1, spy);
        spy.called.should.be.true;
      });
      
   });
});