/**
 * Created by voltaic on 1/12/16.
 */

var mysql      = require('mysql');
var connection={};
var connecter=function() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'loginuser',
        //password : 'secret',
        database: 'goal'
    });
return connection;
};

//connection.end();

module.exports={
    addtodb: function(data,cb){
            var conn=connecter();
            conn.connect();
          var querystring="INSERT INTO login VALUES(" +
                 "'" + data.email +"'," + "'" + data.pwd +"'" +
              ");";
        console.log(querystring);
        conn.query(querystring,function (err,result) {
            cb(result);
        });
    conn.end();
    },
    checkdata: function(data,cb){
        var conn=connecter();
        var c=false;
        conn.connect();
        conn.query('select * from login',function(err,rows){
           for(var row of rows){
               if((row.username == data.email) && (row.password == data.pwd)) {
                   c=true;
                   break;
               }
           }
            cb(c);
        });
      conn.end();
    }
}