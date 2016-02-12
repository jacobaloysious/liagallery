'use strict';


function Activities(){
    
}

Activities.create = function(name, grade){
  
  var activity = new Activities();
  
  activity.name = name;
  activity.grade = grade;
  activity.id = '1';
  
  return activity;  
    
};


var _p = Activities.prototype;

_p.advanceGrade = function(){
    this.grade++;    
};

_p.toString = function(){
  return this.id + this.name;  
};

module.exports = Activities;