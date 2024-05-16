// FUNCIONES

function number() {
    console.log(10 + 10);
}

// Invocacion de una function

number();

// Parametros y argumentos

function message(name, lastName){
    console.log('Hola mi nombre es ${name} y mi apellido es ${lastName');
}

message('Jose', 'Perez');

// Comunicacion entre function 

App();

function App() {
    console.log('Iniciando APP');

    const user = 'Juan'

    user ? authenticated(user) : notAuthenticated();
}

function authenticated(username){
    console.log(`Iniciastes sesion con ${username}`);
}

function notAuthenticated() {
    console.log('No iniciaste sesion');
}

// Declaracion :

function Number2(num1, num2) {
    return num1 + num2;
}

console.log(Number2(10, 10));

// Por Expression / Arrow Function

const Number3 = (num1, num2) => num1 - num2 