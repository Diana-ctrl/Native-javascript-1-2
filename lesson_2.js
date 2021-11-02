const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
let name = students.map(s => s.name)
console.log(name);

function map(array, fn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = fn(array[i]);
    }
    return result;    
}

console.log(students.filter(s => s.age >= 21))

function filter(array, fn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result.push(array[i]);
        }
    }
    return result;    
}

console.log(students.find(s => s.name === 'Bob'))

function find(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return array[i];
        }  
    }
}
console.log(students.map(st => {st.name === 'Nick' ? {...st, isMarried: true} : st})