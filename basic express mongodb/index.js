const express = require("express")


const app = express();
const port = process.env.PORT || 5000;



console.log(process.env.S3_BUCKET);

console.log(process.env.DATABASE_PASSWORD);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://boilerler-plate:AfVN6Rqb2AYwkJof@cluster0.iono61s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const userCollection = client.db("Users-Boiler").collection("users-data");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    app.get("/",(req,res)=>{
        res.send("server is running")
    })

    // get all user

   app.get("/users",async(req,res)=>{
    const result = await userCollection.find().toArray()
    res.send(result)
   })

// get user by email 


app.get("/users/:email",async(res,req)=>{
  const getEmail =  req.params.email
  const filter = {email:getEmail}
 const result = await userCollection.findOne(filter)
 res.send(result)

})

app.get("/users/:id",async(res,req)=>{
  const getEmail =  req.params.id
  const filter = {id:getEmail}
 const result = await userCollection.findOne(filter)
 res.send(result)

})



























    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);











app.listen(port,()=>{
    console.log(`this project deploy on port ${port}`);
})


