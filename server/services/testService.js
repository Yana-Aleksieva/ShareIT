const Test = require('../models/Test')

exports.createTest = async (data) => { (Test.create(data)) };

exports.getAll = () =>  Test.find() ;