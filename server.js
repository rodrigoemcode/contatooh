// server.js
var app = require("./config/express")();

app.listen(app.get('port'), function () {
  console.log('Express Server escutando na porta ' + app.get('port'));
});

