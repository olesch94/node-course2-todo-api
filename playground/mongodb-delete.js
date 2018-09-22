const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

//    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({name: 'Vivek'}).then((result) => {
        console.log(result);
    })




// db.close();
})