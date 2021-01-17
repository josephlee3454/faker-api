const express = require("express");
const faker = require("faker")
const app = express();


class User{
    constructor(){
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password =faker.internet.password()

    }
}
class Company{
    constructor(){
        this.companyName = faker.company.companyName()
        this.address = `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.stateAbbr()} ${faker.address.zipCode()} ${faker.address.country()}`

    }
}

app.get("/api/user", (request,response) => {
    console.log(request)
    response.json({data: new User})
})

app.get("/api/company", (request,response) => {
    console.log(request)
    response.json({data: new Company})
})



app.get("/api/user/company", (request, response) => {
    console.log(response)
    response.json({ companyData: new Company(), userData: new User() });
});



app.listen(8000, ()=>{
    console.log("app is running on port 8000")
})

