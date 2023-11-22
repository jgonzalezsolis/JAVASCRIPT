const { faker } = require('@faker-js/faker');
const express = require("express");


// Your Express.js server code here

const app = express();
const port = 8000; 

// Define your routes and middleware here


// we can create a function to return a random / fake "user"

const createUser = () =>{
    const newUser = ({
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    });
    return newUser;
};

const createCompany = () =>{
    const newCompany = ({
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
        }
    });
    return newCompany;
};



    app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
    });

    app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
    });

    app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const response = {
    user: newUser,
    company: newCompany,
    };
    res.json(response);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



