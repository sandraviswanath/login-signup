const express =require('express')
const { signup, getsignup, getallSignup, deleteUser } = require('../controller/signup')
const Login = require('../controller/login')


const router =express.Router()

router.route('/signup').post(signup)
router.route('/getsignup/:email').get(getsignup)
router.route('/getallsignup').get(getallSignup)
router.route('/deleteuser/:userId').delete(deleteUser)



router.route('/login').post(Login)

module.exports= router