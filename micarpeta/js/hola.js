
function operaciones() {

var val_1 = 3;
var val_2 = 4;

console.log(val_1);
console.log(val_2);

hace_operaciones(val_1,val_2);

var suma = val_1 + val_2;
var resta = val_2 - val_2;

alert("el resultado de la suma es"  + suma);
alert("el resultado de la resta" + resta);

}

function hace_operaciones(val_1,val_2){
		this.val_1 = 0;
		this.val_2 = 2;
		alert(this.val_1+this.val_2);
}