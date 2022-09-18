'use strict'
const calc = {
    a: null,
    b: null,
    read: function (num1, num2){
        if (num1 !== typeof Number || isNaN(num1) || num2 !== typeof Number || isNaN(num2)){
            alert('Вы ввели не число')
        }
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

calc.read('3', 5);
alert( calc.sum() );
alert( calc.mul() );