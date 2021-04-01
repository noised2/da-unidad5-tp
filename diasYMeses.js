var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var meses30 = [];
var meses31 = [];

for (var i = 0; i < meses.length; i++) {
    if (diasDelMes[i] == 30) {
        meses30.push(meses[i]);
    }
    if (diasDelMes[i] == 31) {
        meses31.push(meses[i]);
    }
}

console.log('Los meses con 30 días son: ' + meses30);
console.log('Los meses con 31 días son: ' + meses31);