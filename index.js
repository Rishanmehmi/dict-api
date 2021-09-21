  var express = require('express');
  var fs = require('fs');

    app = express(),
    port = process.env.PORT || 4000;
 
    app.get('/', (req, res) => {
        fs.readFile('./list.txt', function(err , txt)
        {
            if(err)
            {
                throw err;
            }
            else
            {
                var result = txt.toString().split("\r\n");
            }
            res.send(result);
            
        }); 
     
    });
    app.listen(port, () => {
        console.log('Server started on: ' + port);
    });