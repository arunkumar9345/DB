const {MongoClient}=require('mongodb')
let db
function connectdb(startserver){
    MongoClient.connect('mongodb+srv://arunkumar:arun9345@cluster0.lri240g.mongodb.net/?retryWrites=true&w=majority').then(function(client){
    db=client.db()
    return startserver()
    }).catch(function(error){
        return startserver(error)
    })

    console.log(db)

}
function getdb(){
    return db
}

module.exports={connectdb,getdb}