function square(num) { // función tradicional con la palabra reservada "function"
    return num * num;
}

const square = (num) => { // función de tipo arrow function
    return num * num;
}

const square = num => num * num; // función de tipo arrow function con el return implícito