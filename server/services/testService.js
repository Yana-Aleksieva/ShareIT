const Test = require('../models/Test')
const User = require('../models/User')

exports.createTest = async (data) => { 
    //console.log(id)
        
   //const user = await User.findOne({_id: id});
   //console.log(user)
await  Test.create(data) ;
const test = await Test.findOne({title: data.title, question1: data.question1});


 

  console.log(test.owner)
  console.log(test)
};

exports.getAll = () =>  Test.find();

exports.getOneById = (id) => Test.findById(id);

exports.updateOneById = (id, data) => Test.findByIdAndUpdate(id, data);

exports.deleteTest = (id) => Test.findByIdAndDelete(id);