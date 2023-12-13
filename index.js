let express = require("express")
const { createUser } = require("./usermodel")
let app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/user/create",createUser)

app.listen(3003,()=>{
    console.log("connted to port 3003")
})
