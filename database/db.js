const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sijanm',{
    useNewUrlParser: true,

    useUnifiedTopology : true

})