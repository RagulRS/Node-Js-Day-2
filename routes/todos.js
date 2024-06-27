import express from 'express';
const todosRouter = express.Router();

let todos = [{
    id: "1",
    name: "sleep",
    isCompleted: false
}]
todosRouter.get('/',(req,res)=>{
    res.send(todos);
});

export default todosRouter;