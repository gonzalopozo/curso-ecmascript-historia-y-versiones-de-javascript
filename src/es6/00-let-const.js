var lastName = 'David'; // declarando y asignando
lastName = 'Oscar'; // reasignar
console.log(lastName); // invocar variable

let fruit = 'Apple'; // declarando y asignando
fruit = 'Kiwi'; // reasignar
console.log(fruit); // invocar variable

const animal = 'Dog'; // declarando y asignando
animal = 'Cat'; // reasignar, pero con "const" no es posible reasignar
console.log(animal); // invocar variable

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

