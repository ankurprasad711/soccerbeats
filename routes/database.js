/**
 * Created by voltaic on 1/12/16.
 */
var pg = require('pg');




//connection.end();

module.exports={
    addtodb : function(data,cb){
          pg.connect(process.env.DATABASE_URL, function(err, client, done) {

            var querystring = "INSERT INTO test_table VALUES(" +

                "'" + data.email + "'," + "'" + data.pwd + "'" +
                ");";
              console.log(querystring);
            client.query(querystring, function (err, result) {
                done();
                cb(result);

            });
        });
    },
    checkdata : function(data,cb){
           console.log("what in database");
                var c1=false;
        pg.connect(process.env.DATABASE_URL, function(err, client, done) {

            client.query('select * from test_table',function(err,rows){

                for(let row in rows) {
                    console.log(row);
                    if((row.username == data.email) && (row.password == data.pwd)) {

                        c1=true;

                    }
                    break;
                }
               done();
                cb(c1);
            });
        });

    }
}