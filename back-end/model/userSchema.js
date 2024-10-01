const mongoose=require('mongoose')
const userSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number}
});
const user = mongoose.model('user',userSchema);

module.exports=user;

