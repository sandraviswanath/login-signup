const bcrypt = require('bcrypt');

const user = require('../model/userSchema');



const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const dbemail = await user.findOne({ email });
      if (dbemail) {
        if (dbemail.email === email && (await bcrypt.compare(password, dbemail.password))) {
          console.log('Login success');
          res.json({ user: dbemail }); 
        } else {
          console.log('Login failed');
          res.status(401).json({ error: 'Invalid email or password' }); 
        }
      } else {
        console.log('No data in db');
        res.status(404).json({ error: 'User not found' }); 
      }
    } catch (error) {
      console.log('Login error:', error);
      res.status(500).json({ error: 'Internal server error' }); 
    }
  };
 



module.exports = Login;

  
