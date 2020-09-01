const express = require('express');

const app = express();

app.use(express.json());
const axios = require('axios');






app.get('/sai', (req,res)=>{
    res.send('We on home');
});

/*(async()=>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
    }catch(err){
        console.log(err);
    }
})();*/

var Data;
//To get the request
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response){
        Data = response.data;
        

    })
    .catch(function (error){
        console.log(error);
    })
    .finally(function(){

    })


app.get('/result', function(req,res){
    res.send(Data);
});

Data = {
   userId: '2',
   id: '2',
   title : 'sai',
   completed: false
};

axios.post('https://jsonplaceholder.typicode.com/todos/1', Data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.Data);
    }).catch((err) => {
        console.error(err);
    });



/*
app.post('/result',(req,res)=>{
    const course = {
        userId: course.length + 1,
        id : "2",
        title : "ewwe",
        completed : false
    };
    data.push(course);
    res.send(course);
});

*/







app.listen(3000);