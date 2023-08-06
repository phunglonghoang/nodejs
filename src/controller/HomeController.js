import connection from "../configs/connectDB"

let getHomePage =(req,res) =>{
   // logic
    // simple query\ 
    let data=[];

    connection.query(
  'SELECT * FROM `user`  ',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    data =  results.map((row) =>{return row})
    console.log(data); 
    return res.render('index.ejs', {dataUser: data})
  }
)
   
   
}
module.exports ={
    getHomePage
}