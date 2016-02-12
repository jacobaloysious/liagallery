/// <reference path="../../typings/tsd.d.ts" />

'use strict';

var chai  = require('chai'),
activities = require("../activities"),
should = chai.should(),
expect = chai.expect;

chai.should();


describe('Activity track', function(){
   it('should be', function(){
       var activity = activities.create("lia", "LKG");
       expect(activity.name).equals("lia");
   });
});

