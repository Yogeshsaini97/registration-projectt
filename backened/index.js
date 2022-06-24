
const Mongoose=require("mongoose")
 const cors=require("cors")   
 
 Mongoose.connect("mongodb://localhost:27017/yogeshdata"); 
 
 const yogeshschema=new Mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
 });   

const yogeshmodel=Mongoose.model("yogeshdatas",yogeshschema);


const productschema=new Mongoose.Schema({
    Name:String,
    Brand:String,
    Color:String,
    Ram:String,
    Price:String
 });   

const productmodel=Mongoose.model("products",productschema);



// const connecttodb=async ()=>                                          
// {

// let data=new productmodel({
//     Name:"yogesh",
//     Email:"yogesh.saini@gmail.com",
//     Password:"123@123"


// }); 


// data.save();
// }

// connecttodb();


const express=require("express")
const app=express();

app.use(express.json());
app.use(cors());

app.post("/Register",async (req,resp)=>
{
   
    let data=await new yogeshmodel(req.body); 
    data.save();
    resp.send(req.body);
    console.log(req.body);


})

app.post("/Login",async (req,resp)=>
{
   
   let data=await yogeshmodel.findOne(req.body);
   console.log(data);
   if(data)
   {
    resp.send(data);
   }
   else
   {
    data={error:"No result found"}
    resp.send(data);
   }
   
   


})


app.post("/addproduct",async (req,resp)=>
{
   
    let data=await new productmodel(req.body); 
    data.save();
    resp.send(req.body);
    console.log(req.body);


})

app.get("/showproduct",async(req,resp)=>
{

let data=await productmodel.find();
console.log(data);
resp.send(data);

})

app.delete("/deleteproduct/:_id", async (req,resp)=>
{
    let data=await productmodel.deleteOne(req.params);
    console.log(data);
    resp.send(data);
}
)

app.get("/getoneproduct/:_id",async (req,resp)=>
{
    let data=await productmodel.findOne(req.params);
    console.log(data)
    resp.send(data);


})


app.put("/updateproduct/:_id",async (req,resp)=>
{
    let data=await productmodel.updateOne(req.params,{$set:req.body})
    console.log(data)
    resp.send(data);
})

app.get("/searchproduct/:key",async (req,resp)=>
{
    let data = await productmodel.find({ $or: [{ Brand: { $regex: req.params.key }}, {Name:{ $regex: req.params.key } }, {Color:{ $regex: req.params.key } }, {Ram:{ $regex: req.params.key } }, {Price:{ $regex: req.params.key } }] });
    console.log(data);
    resp.send(data);
})



app.listen(5000);





