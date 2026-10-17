// const tinderUser = new Object() // This is a single ton Object
const tinderUser = {} // This is a non-singleton Object

tinderUser.Id = "123abc"
tinderUser.name = "sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "Arsalan@google.com",
    FullName: {
        UserFullName: {
            firstName: "Arsalan",
            LastName: "Azhar"
        }
    }
}

// console.log(regularUser.FullName.UserFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2,  obj4)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const users = [
    {
       id: 1,
       email: "A@gmail.com"
    },
        {
       id: 1,
       email: "A@gmail.com"
    },
        {
       id: 1,
       email: "A@gmail.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'))
// console.log(tinderUser.hasOwnProperty('IsLogged'))


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Arsalan"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

console.log(Instructor)

// {
//     "name": "Arsalan"
//     "coursename": "JS in Hindi"
//     "price": "free"
// }