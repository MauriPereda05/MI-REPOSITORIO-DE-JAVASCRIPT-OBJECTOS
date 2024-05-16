// OBJETOS

// Creacion de objetos

const persona = {
    name: 'Alex',
    lastName: 'Lopez',
    age: 30,
    job: 'architect',
};

// Acceder a los datos

console.log(persona.name); // acceder a los datos con (.)

console.log(persona['lastName']); // acceder a los datos con ([])

// Agregar valores al objeto

persona.country = 'Mexico';

console.log(persona);

// Eliminar valores

delete persona.lastName;
delete persona.country;

console.log(persona);

// Congelar

Object.freeze(persona);

// Sellar

Object.seal(persona);

persona.city = 'San Francisco';

// Unir objetos

const persona2 = {
    name: 'Pedro',
    lastName: 'Perez',
    age: 30,
};

const persona3 = {
    name: 'Diego',
    lastName: 'Cueva',
    age: 30,
};

// Assign 

const Union = Object.assign(persona2, persona3);

console.log(Union);

// SPREAD OPERATOR

const Union2 = { ...persona2, ...persona3 };

console.log(Union2);

// THIS

const persona4 = {
    name : 'Alex',
    lastName : 'Perez',
    age : 25,
    fullName(){
        return `Hola soy ${this.name} ${this.lastName}`
    }
}

// Recorre

// Devuelve las propiedades 

console.log(Object.keys(persona));

// Devuelve los valores 

console.log(Object.values(persona));

// Devuelve propiedad : valor

console.log(Object.entries(persona));