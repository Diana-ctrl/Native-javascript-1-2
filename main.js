const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 89
    }
]

function studentToString(st) {
    return `Hi! I'm ${st.name}. I have ${st.scores}`
}

const strings = students.map(st => `Hi! I'm ${st.name}. I have ${st.scores}`);

const copyStudents = students.map(st => ({...st}))


console.log(strings)