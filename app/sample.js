
function Apple(type){
    console.log("Creating apple");
    this.type = type;
    this.color = "red";
}

Apple.prototype.getInfo = this.getInfo = function(){
      return this.type + '\t' + this.color;  
};
var ap = new Apple(1);
console.log(ap.getInfo());
var ap2 = new Apple(1);

var orange = {
      type: "type",
      color: "orange",
      getInfo: function(){
        return this.type + '\t' + this.color;  
      }
};
console.log(orange.getInfo());


var grape = new function(){
    this.type = "type";
    this.color = "grape";
    this.getInfo = function(){
      return this.type + '\t' + this.color;  
    };
};
console.log(grape.getInfo());