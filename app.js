var express = require('express');


var app = express();
var fs = require("fs"); // read user.json



app.get('/getUsers',function(req,res){
    fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
});
var user = {
    "user4" : {
        "name" : "Pacharapols",
        "email": "noon@gmail.com",
        "password" : "123456",
        "weight" : 85,
        "height" : 150,
        "case" : 2,
        "age" : 25,
        "Gender":1,
        "id" : 4
    }
}
app.post('/addUser',function(req,res){
    fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){
        data = JSON.parse(data);
        data["user4"]=user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});


app.post ('/addCal',(req,res,next) =>{
    const meal = req.body.meal;
    const cal = req.body.colories;
    const caltoday = {
        meal : meal,
        cal , cal
    } 
})

app.post('/signUp', (req, res, next) => {
    const name = req.body.name;
  
        var name = req.body.name;
        var email=req.body.email;
        var height = req.body.height;
        var weight = req.body.weight;
        var option = req.body.option;
        var gender = req.body.gender;
        var age = req.body.age;
        
    const user = {
    
        name : name,
        email: email,
        height : height,
        weight : weight,
        option :Number(option),
        gender: gender,
        age : age,
        id : uuid.v4()

    
    };
    transactions.unshift(transaction);
    res.status(200).json(transaction);
});

app.get('/getUsers/:id',function(req,res){
    fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){
        var users = JSON.parse(data);
        var user = users["user"+req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});
app.get('/getnameUsers/:id',function(req,res){
    fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){
        var users = JSON.parse(data);
        var user = users["user"+req.params.id];
        var name = user.name;
        console.log(name);
        res.end(JSON.stringify(name));
    });
});




app.get('/GetBmr/:id',function(req,res){
    fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){
        var users = JSON.parse(data);
        var user = users["user"+req.params.id];
        var height = user.height;
        var weight = user.weight;
        var option = user.case;
        var gender = user.gender;
        var age = user.age;


        if(gender ===1){
            var bmr = 66 + (13.7*weight)+(5*height)-(6.8*age);

        }
        else{
         var bmr =665+(9.6*weight) + (1.8*height)- (4.7*age);
        }

    
        switch (option) {
            case 1:
              bmr = bmr*1.2;
              break;
            case 2:
              bmr = bmr*1.375;
              break;
            case 3:
               bmr = bmr*1.55;
              break;
            case 4:
              bmr = bmr*1.725;
              break;
            case 5:
              bmr=bmr*1.9;
              break;
          
          }
          console.log(bmr);
       
          res.end(JSON.stringify(bmr));

    })
})


var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s",host,port)
})
