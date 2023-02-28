const jwt = require("jsonwebtoken");
const User = require("../model/user-model");
const Image = require("../model/image-model")


exports.signup = async function (req,res){
 try{
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let gender = req.body.gender;
  let email=req.body.email;
  let password = req.body.password;

  let userEmail = await User.findOne({email: req.body.email})
  if(userEmail){
    return res.status(401).json({
      message: " Email Already Exist"
    })
  }
  let newUser = new User({
    firstname,
    lastname,
    gender,
    email,
    password,
})
await newUser.save();
return res.status(200).json({
    message:'User Added........!!!!!!!!!!'
})
 } catch(error){
  return res.status(404).json({
    message: "Server Error"
  })
 }
}

exports.Image = async function(req, res){
  let image = req.file.filename;
  let newImage = new Image({
    image
  })
  await newImage.save();
  return res.status(200).json({
    message: 'Image Uploaded Successfully........!!!!!'
  })
}

exports.login = async function (req, res){
  const user = await User.findOne({ 
        email: req.body.email,
        password: req.body.password
      });
      console.log("=-=-=-=-=", user._id);
    if (!user) {
        return res.status(400).send("Username or password is incorrect");
    } else {
        const token = jwt.sign({ 
          email: req.body.email,
          _id: user._id
        }, "secretKey");
        return res.send({
            message: "Login successful",
            token,
            user,
        });
    }
}


exports.users = async function(req, res){
let userData = await User.findOne({email: req.user})
  console.log("=-=-=--=-", userData);
 if(userData){
  return res.status(200).json({
    message: "User Found",
    userData
  })
 }
 return res.status(404).json({
  message: "User Not Found"
})
}

exports.updateUser = async function(req, res) {
  let _id = req._id
    const updateduser = await User.findByIdAndUpdate({_id},{
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password},  {new: true})
          return res.status(200).json({
            message: "User Updated Successfully......!!!!!!!",
            updateduser
          })
        }