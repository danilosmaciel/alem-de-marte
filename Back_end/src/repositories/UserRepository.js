const User = require('../models/user');

class UserRepository{

    insertUser = (user) => {
        return User.create({ name: user });        
    }

    updateUser = (id, user) => {
       return User.findByPk(id)
        .then( usr => {
           usr.name = user;
            return usr.save();
        })
        .catch( erro => erro )
    }
}


module.exports = UserRepository;
