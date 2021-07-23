const express = require("express")
require("./db")
const User=require("./models")
const app = express()
app.use(express.json());
 
app.get('/', function (req, res) {
  res.send("Welcome to summerschool")
})

app.post('/api/users',async(req,res)=>{
    try {const user=new user({
        title: req.body.title,
        description: req.body.description,
    })
    await  user.save()
    //console.log(req.body.title);
    return res.send("user")}
    catch(e) {
        return res.status(500).send("Server error")
    }
})

app.get('/api/users',async(req,res)=>{
    try{
        const users = await user.find();
        return res.status(200).send(users);
    }
    catch(e){
        return res.status(500).send(e)
    }
})

app.get('/api/users/:id',async(req,res)=>{
    const _id=req.params.id;
    try{
        const users = await user.findById(_id);
        return res.status(200).send(users);
    }
    catch(e){
        return res.status(500).send(e)
    }
})

app.patch('/api/users/:id',async(req,res)=>{
    const _id=req.params.id;
    try{
        const users = await user.findByIdAndUpdate(_id,req.body);
        if(user) {
            const userUp= await user.findById(_id);
            return res.status(200).send(userUp);}
        else {return res.status(400).send("Update failed")}
    }
    catch(e){
        return res.status(500).send(e)
    }
})

app.delete('/api/users/:id',async(req,res)=>{
    const _id=req.params.id;
    try{
        const users = await user.findByIdAndDelete(_id);
        if(user)
        {
            return res.status(400).send("user successfully deleted")
        }
        return res.send("user deletion failed");
    }
    catch(e){
        return res.status(500).send(e)
    }
})

app.listen(3000, () => {console.log("listening on port 3000")})