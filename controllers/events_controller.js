//dependencies 

const events = require('express').Router()
const db = require('../models')
const { Event } = db

//find all eventss 
events.get('/', async(req,res) => {
    try{
        const foundEvents = await Event.findAll({
            order: [ [ 'date', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundEvents)
    }
    catch (error){
        res.status(500).json(error)
    }
})

//find specific events 
events.get('/:id', async(req,res) => {
    try{
        const foundEvents = await Event.findOne({
            where: { events_id: req.params.id}
        })
        res.status(200).json(foundEvents)
    } catch (error){
        res.status(500).json(error)
    }
})

//create a events 
events.post('/', async (req,res) => {
    try {
        const newEvents = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new events',
            data: newEvents
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

events.put('/:id', async (req,res) => {
    try{
        const updatedEvents = await Event.update(req.body, {
            where: {
                events_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} events(s)`
        })
    } catch (err){
        res.status(500).json(err)
    }
})

events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                events_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} events(s)`
        })
    } catch (err){
        res.status(500).json(err)
    }
})


//export 
module.exports = events;