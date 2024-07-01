import express from 'express';
import cors from 'cors';
import todosRouter from './routes/todos.js';
import mongooseConnect from './utils/mongoose-connection.js';
import teachersRouter from './routes/teachersRouter.js';
import { db } from './utils/mongo-connection.js';
import connectToDb from './utils/mongo-connection.js';
import studentDBRouter from './routes/studentsRouter.js';

const server =express();
server.use(express.json());
server.use(cors());
await mongooseConnect();

// const authAllApi = (req, res, next) => {
//     try {
//       const token = req.headers["authorization"];
//       jwt.verify(token, process.env.JWT_SECRET);
//       next();
//     } catch (err) {
//       console.log(err.message);
//       // err
//       res.status(403).send({ msg: "Unauthorized" });
//     }
//   };
  server.use("/teachers",teachersRouter);

server.use("/students", studentDBRouter)

server.use('/todos', todosRouter);

let students = [{
    id: "1",
    name:'Rahul',
    age:20,
    gender:'Male'
}]
server.get('/students', (req, res) => {
    res.send({students});
});

server.post('/students', (req, res) => {
    const {body} = req;
    students.push({id: Date.now().toString(), ...body});
    res.send({msg: "created students"})
});

//PUT method 

server.put('/students/:studentId',(req,res)=>{
    const {studentId} = req.params;
    const {body}= req;
    if(Object.keys(body).length > 0){
        const index = students.findIndex((stu) => stu.id === studentId);
        students[index] = {...body,id: studentId};
        res.send({msg: "updated students"});
    }else{
        res.status(400).send({msg: "Bad Request"});
    }
});

//DELETE method

server.delete('/students/:studentId',(req,res)=>{
    const {studentId} = req.params;
    if(students.length > 0){
        students = students.filter((stu) => stu.id !== studentId);
        res.send({msg: "deleted students"});
    }else{
        res.status(404).send({msg: "student not found"});
    }
  
});





const port =8000;
server.listen(port, ()=>{
    console.log(Date().toString(),": server listineng on", port);
});