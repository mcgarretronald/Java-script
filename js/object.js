{
    const person1 = {
        firstname: "John",
        lastname: "Frey",
        age: "23",
    }
    const person2 = {
        firstname: "KIngs",
        lastname: "Stone",
        age: "25"
    }

    console.log(person1.age)
    console.log(person2.lastname)
}
{
    const person3 = {
        firstname: "John",
        lastname: "Doe",
        age: "23",
        fullname: function () {
            console.log(this.firstname + " " + this.lastname + " " + this.age)
        }
    }
    person3.fullname()
}

{
    const person4 = {
        firstname: "Lago",
        lastname: "Otieno",
        yob: 1999,
        fullname: function () {
            console.log(this.firstname + " " + this.lastname)
        },
        age: function (currentyear) {
            console.log(currentyear - this.yob) }
    }
    console.log(person4.firstname)
    person4.fullname()
    person4.age(2020)
}
{
    
}