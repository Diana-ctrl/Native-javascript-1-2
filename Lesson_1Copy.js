let obj1 = {
    a: 12,
    b: 'sddf23',
    c: [1, 2, 3, 4],
    d: {
        e: {
            name: 'Diana',
            age: 25,
        }
    }
}
let obj2 = {...obj1}; //поверхностная копия объекта shallow copy

obj2 === obj1 //false

obj2.d = {...obj1.d}
obj2.d.e === obj1.d.e // true
obj2.d.e = {...obj1.d.e}
obj2.d.e === obj1.d.e // false

obj2.c === obj1.c // true
obj2.c = [...obj1.c]; //deep copy
obj2.c === obj1.c // false

