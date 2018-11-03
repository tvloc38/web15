const express = require('express');
const UserRouter = express.Router();

const UserModel = require('../models/userModel');

UserRouter.use((req, res, next) => {
    console.log("User middleware");
    next();
});


// "*/api/users" => get all
UserRouter.get("/", (req, res) => {
    console.log("Get all user");
    UserModel.find({}, "name email avatar intro", (err, users) => {
        if (err) res.status(500).json({ success: 0, error: err })
        else res.status(201).json({ success: 1, users});
    });
});

// "*/api/users" => get user by id
UserRouter.get("/:id", (req, res) => {
    let userId = req.params.id;
    UserModel.findById(userId, (err, userFound) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else if(!userFound._id) res.status(404).json({ success:0, message: "Not Found"})
        else res.status(201).json({ success: 1, userFound});
    });
});

// Create user
UserRouter.post("/", (req, res) => {
    const { name, email, password, avatar, intro } = req.body;
    UserModel.create({ name, email, password, avatar, intro }, (err, userCreated) => {
        if(err) res.status(500).json({ success: 0, message: err})
        else res.status(201).json({ success: 1, user: userCreated });
    });
});

// edit user
UserRouter.put("/:id", (req, res) => {
    let userId = req.params.id;
    const { name, password, avatar, intro } = req.body;
    
    
    // UserModel.findByIdAndUpdate(userId, { name, password, avatar, intro }, {new: true}, (err, userUpdated) => {
    //     if(err) res.status(500).json({ success: 0, message: err})
    //     else res.status(201).json({ success: 1, user: userUpdated });
    // })

    UserModel.findById(userId, (err, userFound) => {
        if(err) res.status(500).json({ success: 0, message: err})
        else if(!userFound._id) res.status(404).json({ success: 0, message: "Not Found"})
        else {
            for(key in { name, password, avatar, intro }) {
                if (userFound[key] && req.body[key]) userFound[key] = req.body[key];            
            }
            // userFound.name = name || userFound.name;
            // userFound.password = password || userFound.password;
            // userFound.avatar = avatar || userFound.avatar;
            // userFound.intro = intro || userFound.intro;

            userFound.save((err, userUpdated) => {
                if(err) res.status(500).json({ success: 0, message: err})
                else res.status(201).json({ success: 1, user: userUpdated });
            })
        }
    })
})

// Delete
UserRouter.delete("/:id", (req,res) => {
    let userId = req.params.id;
    userModel.deleteOne({_id: userId}, (err)=>{
        if(err) res.status(500).json({success: 0, message: err})
        else res.status(200).json({success:1})
    });
});
module.exports = UserRouter;