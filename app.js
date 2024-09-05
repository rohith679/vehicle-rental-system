const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const $ = require('jquery');

const app=express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/vehicle', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to mongodb");
    }).catch((err) => {
        console.log("Error occured", err);
});

function showAlert() {
    alert('Invalid details!');
  }
  
const Schema=mongoose.Schema;

const dataSchema = Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
});
var register = mongoose.model("customerdata", dataSchema);

const rentSchema = Schema({
    name: String,
    id: String,
    age: Number,
    phone :String,
    email: String,
    model: String,
    serial: String,
    amount: Number,
    from: String,
    to: String,
    fromDate: Date,
    toDate: Date
});

var rentaldetails = mongoose.model("rentdetails", rentSchema);




app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/loginpage.html");
});

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
});

app.get("/fairval",(req,res)=>{
    res.sendFile(__dirname+"/fairval.html");
});

app.get("/popular",(req,res)=>{
    res.sendFile(__dirname+"/popular.html");
});

app.get("/myaccount",(req,res)=>{
    res.sendFile(__dirname+"/myaccount.html");
});

app.get("/homepage",(req,res)=>{
    res.sendFile(__dirname+"/homepage.html");
});

app.get("/form",(req,res)=>{
    res.sendFile(__dirname+"/form.html");
});

app.get("/history",(req,res)=>{
    res.sendFile(__dirname+"/history.html");
});

app.get("/carmodels",(req,res)=>{
    res.sendFile(__dirname+"/carmodel.html");
});

app.get("/search",(req,res)=>{
    res.sendFile(__dirname+"/search.html");
});


app.get("/newbilling",(req,res)=>{
    res.sendFile(__dirname+"/newbilling.html");
});

app.get("/payment",(req,res)=>{
    res.sendFile(__dirname+"/payment.html");
});

app.get("/thankyou",(req,res)=>{
    res.sendFile(__dirname+"/thankyou.html");
});

app.get("/feedback",(req,res)=>{
    res.sendFile(__dirname+"/feedback.html");
});

app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/adminlogin",(req,res)=>{
    res.sendFile(__dirname+"/loginadmin.html");
});

app.get("/vendorlogin",(req,res)=>{
    res.sendFile(__dirname+"/loginvendor.html");
});

app.get("/admin",(req,res)=>{
    res.sendFile(__dirname+"/admin.html");
});

app.get("/vendor",(req,res)=>{
    res.sendFile(__dirname+"/vendor.html");
});

app.get("/vendorthanks",(req,res)=>{
    res.sendFile(__dirname+"/vendorthanks.html");
});

app.get("/carmodels",(req,res)=>{
    res.sendFile(__dirname+"/carmodels.html");
});

app.get("/customerad",(req,res)=>{
    res.sendFile(__dirname+"/customerad.html");
});
app.get("/rentad",(req,res)=>{
    res.sendFile(__dirname+"/rentad.html");
});
app.get("/vendorad",(req,res)=>{
    res.sendFile(__dirname+"/vendorad.html");
});

app.post("/register", async(req,res)=>{
    const custsignupdata=new register({
        name: req.body.uname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.crepassword
    });
    await custsignupdata.save();
    console.log("Customer data Saved");
    res.sendFile(__dirname + "/loginpage.html");

});

app.post("/search", async(req,res)=>{
    const rentdetails=new rentaldetails({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone-number,
        id:req.body.id,
        age:req.body.age,
        model:req.body.car-model,
        serial:req.body.car-serial,
        amount:req.body.amount,
        from:req.body.from-location,
        to:req.body.to-location,
        fromdate:req.body.from-date,
        todate:req.body.to-date
    });
    await rentdetails.save();
    console.log("Rental data Saved");
    res.sendFile(__dirname + "/newbilling.html");

});

app.post("/login", async (req, res) => {
    try {
        const password = req.body.password;
        const logindata = await register.findOne({ email: req.body.user });
        if (logindata.password === password) {
            res.sendFile(__dirname + "/homepage.html");
        }
        else {
            $('document').ready(function() {
                showAlert();
            });
            
              
        }
    }
    catch (err) {
        console.log("Invalid details2");
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
