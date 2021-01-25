const webProject = require('../models/webProject.model');
const services = require('../services/services');

exports.addProject = async (req, res) => {
  //console.log('♟️ I Created A Project ♟️:  ', req.body);
  try {
    const { title, type, description, downloadLink } = req.body;
    let id = services.keyGen(10);
    const project = await webProject.create({ id, title, type, description, downloadLink });
    res.status(201);
    res.send(project);
  } catch (error) {
    res.sendStatus(500);
    console.log('What is error??  ', error);
  }
};

exports.getProjects = async (req, res) => {
  try {
    console.log('♛ A Client Requested Projects ♛:  ');
    const allProjects = await webProject.find()
    res.send(allProjects);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};