import pool from "../configs/connectDB.js"

let getHomePage = async(req,res) =>{
const [rows, fields] = await pool.execute( 'SELECT * FROM user');
    return res.render('index.ejs', {dataUser: rows})
};


let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute('select * from user where id =?',[userId]);
    return res.send(JSON.stringify(user))
};
let createNewUser = async(req,res) => {
    console.log("check req ", req.body)
    let {firstName, lastName, email}= req.body;
    await pool.execute('insert into user(firstName, lastName, email)  values (?,?,?)',
    [firstName, lastName, email]);
    return res.redirect('/');
}
let deleteUser = async (req, res) =>{
    let userId = req.body.userId;
    await pool.execute('DELETE FROM user WHERE id= ?', [userId])
     return res.redirect('/');
}
let getEditPage = async(req, res) => {
   
    let userId = req.params.id;
    let [user] = await pool.execute('select * from user where id =?', [userId])
    return res.render('update.ejs', {dataUser: user[0]})
   
}

let updateUser =async (req, res) =>{
    let {firstName, lastName, email,id}= req.body;
 
    await pool.execute('update user set firstName =?, lastName = ? , email = ? where id = ?', 
    [firstName, lastName, email, id]);
    console.log(req.body)
    return res.redirect('/')
}

module.exports ={
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditPage, updateUser
}