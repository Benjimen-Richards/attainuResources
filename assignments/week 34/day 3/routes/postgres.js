
const express =  require('express')
const pg = require('pg').Pool
const postgresRoute = express.Router()
const qry = new pg({
    host:'localhost',
    password:'richards',
    database:'postgres',
    user:'postgres',
    port:5432
})
postgresRoute.get('/',(req,res)=>{
    qry.query('select * from users order by id desc').then(data=>res.send(data.rows))
})
postgresRoute.post('/adduser',(req,res)=>{
    let {name,email,password}=req.body
    qry.query(`select * from users where email ='${email}'`,(err,result)=>
    {
        if(result.rows.length>0)
        {
             res.send("Email Alrdy taken")
        }
        else{
            qry.query('insert into users(name,email,password) values($1,$2,$3)',[name,email,password],(err,result)=> {
                return res.send("Registrarion done")
            })
        }
    })
})

postgresRoute.delete('/delete/:id',(req,res)=>
{
    let id = req.params.id
    qry.query(`delete from users where id=${id}`,(err,result)=>
    {
        return res.send(`Users with id ${id} deleted successfully`)
    })
})

module.exports=postgresRoute