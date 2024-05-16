// ARRAYS

const values = ['Martin', 'Jose', 'Pedro']

// Numero de Posicion de un array 

console.log(values[0]);
console.log(values[1]);
console.log(values[2]);

// Array de objetos 

const ArrObject = [
    { id: 1, name: 'Martin' },
    { id: 2, name: 'Jose' },
    { id: 3, name: 'Juan' },
];

console.log(ArrObject[2]);

// Recorrer los array

// IMPERATIVA

 for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
 }

// DECLARATIVA

values.forEach((value) => {
    console.log(value);
})

// MUTABILIDAD (Modifica el estado original)

   values.push('Diego');
// values.push('Juan');

//  Quitar valores 
   
   values.pop('Juan');

// INMUTABILIDAD (No modifica el estado original)

 const nuevoArreglo = [...values, 'Juan'];

 console.log(nuevoArreglo)