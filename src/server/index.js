const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const postIdRouter = require('./routes/postId')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', postIdRouter );
app.use(cors());
const prisma = new PrismaClient()

app.get('/', async (req, res) => {
  try {
    if(req.body){
    const allPosts = await prisma.post.findMany()
    res.status(200)
    res.json(allPosts)
    console.log(' ϟ tibidit ϟ ● 🤖 → response du port 8000 📮')
    }
  } catch (error) {
    res.send(`une erreur s'est produite: ${error.message}`)
    res.end()
  }
})

app.post('/', async (req, res) => {
  
  try {
    if(req.body && req.body.title && !req.body.id && !req.body.completed){
      const createPost = await prisma.post.create({
        data: req.body
      })
      console.log(req.body);
      res.json(req.body)
    } else{
      res.status(403).send({  error:"une erreur s'est produite... Verifier le contenu de la demande !"})
    }
  } catch (error) {
    res.send(`une erreur s'est produite: ${error.message}`)
    res.end()
  }
})



app.listen(8000, ()=>{
  console.log(' ϟ tibidit ϟ ● 🤖 → Connecté sur le port 8000 📮');
})