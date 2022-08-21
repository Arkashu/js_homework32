'use strict'
const calc = {
    a: null,
    b: null,
    read: function (num1, num2){
        this.a = num1;
        this.b = num2;
    },
    sum: function (){
        return this.a + this.b;
    },
    mul: function (){
        return this.a * this.b;
    }
}

calc.read(2, 5);
alert( calc.sum() );
alert( calc.mul() );