const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect('mongodb+srv://stef:falleneleck93.@cluster0.opvky2j.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connecter bravo !!!! : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB