const express = require('express');
const ninjas = expressRouter();
const {
    getAllNinjas,
    getNinja,
    newNinja,
    deleteNinja,
    updateNinja,
} = require('../queries/ninjas.js');


const {
    checkBoolean,
    checkIsNinja,
    checkVillage,
} = require('../validations/checkNinjas.js');


//INDEX
ninjas.get('/', async(req, res) => {
    const allNinjas = await getAllNinjas();
    console.log(allNinjas)
    if (allNinjas[0]) {
        res.status(200).json(allNinjas);
    } else {
        res.status(500).json({ error: 'server error' });
    }
});

//SHOW
ninjas.get('/:id',  async (req, res) => {
    const { id } = req.params;
    const ninja = getNinja(id);
    if(ninja.episode_appearance) {
        resjson(ninja);
    } else {
        res.status(404).json({ error: 'not found' });
    }
});

