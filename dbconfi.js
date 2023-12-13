let {Sequelize,Model,DataTypes}=require('sequelize')
let sqlcon = new Sequelize({host:"localhost",
                            username:"root",
                            password:"",
                            dialect:"mysql",
                            database:"demo3"})

sqlcon.authenticate().then(()=>{
    console.log("connected to dataBase")
}).catch((err)=>{
    console.log(err)
})

module.exports={sqlcon,Model,DataTypes}