//dependencies 

const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

//find all stagess 
stages.get('/', async(req,res) => {
    try{
        const foundStages = await Stage.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundStages)
    }
    catch (error){
        res.status(500).json(error)
    }
})

//find specific stages 
stages.get('/:id', async(req,res) => {
    try{
        const foundStages = await Stage.findOne({
            where: { stages_id: req.params.id}
        })
        res.status(200).json(foundStages)
    } catch (error){
        res.status(500).json(error)
    }
})

//create a Stage 
stages.post('/', async (req,res) => {
    try {
        const newStages = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStages
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

stages.put('/:id', async (req,res) => {
    try{
        const updatedStages = await Stage.update(req.body, {
            where: {
                stages_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stages(s)`
        })
    } catch (err){
        res.status(500).json(err)
    }
})

stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stages_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stages(s)`
        })
    } catch (err){
        res.status(500).json(err)
    }
})


//export 
module.exports = stages;