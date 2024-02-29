const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const login=(req, res) => {
    const {username, password} =req.body
    const user = { id: 1, username: username };
    User.findOne({ username: username }).then(    ( userdata) => {
        if (!userdata) { return done(null, false, { message: 'Incorrect username.' }); }
        if (!bcrypt.compareSync(password, userdata.password)) { return done(null, false, { message: 'Incorrect password.' }); }
        return done(null, user);
    }).catch((err)=>{
        return res.json({ message: 'Incorrect username or password.' }); // Pass the error to Express for handling
    })
    const token = jwt.sign({ sub: user.id, username: user.username }, 'secret007', { expiresIn: '1h' });
    res.json({ token });
  }

module.exports ={login};
