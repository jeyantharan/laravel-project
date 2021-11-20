const router = require('express').Router()
const fruitsModel = require('../model/fruitModel')


router.get('/',(req,res)=>{
    fruitsModel.find()
    .then(fruits => res.json(fruits))
    .catch(err => res.status(400).json('Error :'+err))
})

router.get('/fruits',(req,res)=>{
    res.json(fruits)
})

router.get('/fruits/:id',(req,res)=>{
    const fruit = fruits.find(f=>f._id === req.params.id )
    res.send(fruit)
})

module.exports = router