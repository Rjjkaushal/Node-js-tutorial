const Joi = require('joi');
const express= require('express');
const app= express();
app.use(express.json());

// app.get()
// app.post()
// app.put()
// app.delete()

const courses= [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]
app.get('/',(req, res)=>{
   return res.send("Hello world");
});

app.get('/api/courses',(req, res)=>{
    return res.send(courses);
 });


app.get('/api/courses/:id',(req,res)=>{
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) return res.status(404).send("the course with given id doesn't exist");
   res.send(course);
  
});


//post method
app.post('/api/courses', (req,res)=>{
   const schema = {
    name: Joi.string().min(3).required()
   };
   const result = Joi.validate(req.body, schema);
//    console.log(result);
   if(result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
   }
   const course = {id:courses.length+1, name: req.body.name};
   courses.push(course);
   res.send(course);
});


//PUT method
app.put('/api/courses/:id',(req,res)=>{
  
  //check for course
  //if not existing return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) return res.status(404).send("the course with given id doesn't exist");

  //validate
  const schema= {
    name:Joi.string().min(3).required()
  };
  const result= Joi.validate(req.body, schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }


  //update the course
  //return the updated course
  course.name= req.body.name;
  res.send(course);
});

//Delete method
app.delete('/api/courses/:id',(req,res)=>{
  
    //check for course
    //if not existing return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("the course with given id doesn't exist");
  
    //delete the course
    //return the deleted course
    const index= courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
  });

const port = process.env.PORT|| 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
