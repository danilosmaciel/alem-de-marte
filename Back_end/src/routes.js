const express = require('express');
const routes = express.Router();
const logRoutes = require('./middlewares/logRoutes');
const UserRepository = require('./repositories/UserRepository');
const LikeRepository = require('./repositories/LikeRepository');

const userRep = new UserRepository();
const likeRepo = new LikeRepository();

routes.get('/', logRoutes, (req, res) => {
    res.send({Hello:'World'})
});

routes.patch('/api/user/:id/:name', logRoutes, (req, res) => {
    const {id, name} = req.params;
    console.log('teste: ' + id + ' - ' + name);

    userRep.updateUser(id, name)
    .then( ret => res.send({ msg: 'success', id: ret.id } ))
    .catch( erro => res.send({ msg: 'fail', erro: erro }))
 });

routes.post('/api/user/:name', logRoutes, (req, res) => {
   userRep.insertUser(req.params.name)
   .then( ret => res.send({ msg: 'success', id: ret.id } ))
   .catch( erro => res.send({ msg: 'fail', erro: erro }))
});

routes.put('/api/like/:id', logRoutes, (req, res) => {
    likeRepo.insertLike(req.params.id)
    .then( ret => res.send({ msg: 'success' } ))
    .catch( erro => res.send({ msg: 'fail' }))
});

routes.delete('/api/like/:id', logRoutes, (req, res) => {
    likeRepo.removeLike(req.params.id)
    .then( ret => res.send({ msg: 'success' } ))
    .catch( erro => res.send({ msg: 'fail' }))
});

routes.get('/api/like/:id', logRoutes, (req, res) => {
    likeRepo.counterLikes(req.params.id)
    .then( ret => res.send({ msg: 'success', count: ret.counter } ))
    .catch( erro => res.send({ msg: 'fail' }))
});

module.exports = routes;