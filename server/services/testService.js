const Test = require('../models/Test')

exports.createTest = async (data) => { (Test.create(data)) };

exports.getAll = () =>  Test.find();

exports.getOneById = (id) => Test.findById(id);

exports.updateOneById = (id, data) => Test.findByIdAndUpdate(id, data);

exports.deleteTest = (id) => Test.findByIdAndDelete(id);