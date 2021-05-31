const { User } = require('../models');


const userController = {
    getAllUsers: (req,res) => {
        User.findAll({
            include: ['orders']
        }). then( users => {
   
                if(!users) {
                    throw new Error("Users not found");
                }
    
                res.json({
                    success: true,
                    users
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
    },

    getUserById: (req,res) => {
        const userId = req.params.id;
        User.findByPk(userId, {
                include: ['orders']
            }). then( user => {
               
            if(!user) {
                throw new Error("User not found");
            }
                res.json({
                    success: true,
                    user
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },
    updateUser: (req,res) => {
        const userdata = req.body;
        const userId = req.params.id;
        User.findByPk(userId). then( user => {

            if(!user) {
                throw new Error("User not found");
            }

            return user.update(userdata);
        }). then( user => {
                res.json({
                    success: true,
                    user
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },
    deleteUser: (req,res) => {
        const userId = req.params.id;
        User.findByPk(userId).then(user => {
            if (!user) {
                throw new Error ("utilisateur introuvable")
            }
            return user.destroy();
             })
            .then(()=> {res.json({
                success: true
            })})
            .catch(error => {res.status(500).json({
            success: false,
            error: error.message
            });

        });
        
    },
};

module.exports = userController;