const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

const { Pool } = require('pg');
var pool = new Pool({
/*  user: 'chloe',
  password: 'root',
  host: 'localhost',
  database: 'postgres'
 */
  connectionString: process.env.DATABASE_URL
})

pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Student [IF NOT EXIST] (id VARCHAR(255),name VARCHAR(255), weight INT, height INT, hairColor VARCHAR(255), gpa VARCHAR(5))";
  pool.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post('enter',function(req,res){
 	console.log(req.body.id);
	console.log(req.body.sname);
  console.log(req.body.sweight);
  console.log(req.body.sheight);
  console.log(req.body.scolor);
  console.log(req.body.gpa);
    //pool.connect();
  var sql2 = "INSERT INTO Student (id,name,weight,height,hairColor,gpa) VALUES 'req.body.id','req.body.sname','req.body.sweight','req.body.sheight','req.body.scolor','req.body.gpa')";
  pool.query(sql2, function(error,result){
    if (error) throw error;
    console.log("student added");
  })
})

app.post('changeN',function(req,res) {
  console.log(req.body.idName);
  console.log(req.body.changeName);
    //pool.connect();
  var sql3 = "UPDATE Student SET name = ('req.body.changeName') WHERE id = ('req.body.idName')";
  pool.query(sql3, function(err,res){
    if (error) throw error;
    console.log("student name changed");
  })
})

app.post('changeW',function(req,res) {
    console.log(req.body.idWeight);
    console.log(req.body.changeWeight);
    //pool.connect();
    var sql4 = "UPDATE Student SET wight = ('req.body.changeWeight') WHERE id = ('req.body.idWeight')";
    pool.query(sql4, function(err,res){
      if (error) throw error;
      console.log("student weight changed");
    })
  })

  app.post('changeH',function(req,res) {
    console.log(req.body.idHeight);
    console.log(req.body.changeHeight);
    //pool.connect();
    var sql5 = "UPDATE Student SET height = ('req.body.changeHeight') WHERE id = ('req.body.idHeight')";
    pool.query(sql5, function(err,res){
      if (error) throw error;
      console.log("student height changed");
    })
  })

  app.post('changeC',function(req,res) {
    console.log(req.body.idColor);
    console.log(req.body.changeColor);
    //pool.connect();
    var sql6 = "UPDATE Student SET hairColor = ('req.body.changeColor') WHERE id = ('req.body.idColor')";
    pool.query(sql6, function(err,res){
      if (error) throw error;
      console.log("student hair color changed");
    })
  })

  app.post('changeG',function(req,res) {
    console.log(req.body.idGPA);
    console.log(req.body.changeGPA);
    //pool.connect();
    var sql7 = "UPDATE Student SET gpa = ('req.body.changeGPA') WHERE id = ('req.body.idGPA')";
    pool.query(sql7, function(err,res){
      if (error) throw error;
      console.log("student gpa changed");
    })
  })

  app.post('delete',function(req,res){
    //req.body.uid
    //delete the user with id
    // res.redirect('/');
    console.log(req.body.deleteStudent);
    //pool.connect();
    var info = "DELETE FROM Student WHERE id = ('req.body.deleteStudent')";
    pool.query(info, function(err,res){
      if (error) throw error;
      console.log("student deleted");
    })
  })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/users', function(req, res){
  pool.query("select * from users", function(error, result){
    var results = { 'results': (result.rows[0].id) ? result.rows : [] };
    res.render('pages/db', results);
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))