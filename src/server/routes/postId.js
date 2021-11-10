const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
router.use(cors());
const prisma = new PrismaClient()

router.get('/todo/:id', async (req, res, next)=>{
  const findPost = await prisma.post.findUnique({
    where: { id: Number(req.params.id)}
  })   
  try{
    if(req.body && findPost ){
      res.json(findPost)
    } else{
      res.status(404).json("la todo n'existe pas..")
    } 
    
  }catch (error) {
      res.send(`une erreur s'est produite: ${error.message}`)
    res.end()
  }
})

router.post('/todo/:id', async (req, res, next)=>{
  const findPost = await prisma.post.findUnique({
    where: { id: Number(req.params.id)}
  })
  const updatePost = await prisma.post.update({
    where: { id: Number(req.params.id) },
    data:  { completed: req.body.completed }
  })   
  try{
    if(req.body && updatePost){
      res.json(updatePost)
      console.log('Voici la réponse du routeur:'+ JSON.stringify(req.body));
    } else{
      res.status(404).json("la todo n'existe pas..")
    }
  }catch (error) {
      res.send(`une erreur s'est produite: ${error.message}`)
    res.end()
  }
})

router.delete('/todo/:id', async (req, res, next)=>{
  const findPost = await prisma.post.findUnique({
    where: { id: Number(req.params.id)}
  })
  const deletePost = 
     await prisma.post.delete({
      where: { id: Number(req.params.id) }
    })
  
  try{
    if(req.body && findPost && deleteTodoAction ){
      res.json(deletePost)
      console.log('Voici la réponse du routeur:'+ JSON.stringify(req.body))
    } else{
      res.status(404).json("la todo n'existe pas..")
    }
  }catch (error) {
      res.send(`une erreur s'est produite: ${error.message}`)
  }
}
)




module.exports = router