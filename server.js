const express = require("express"),
   path = require("path"),
   app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.resolve(__dirname, "public")));


app.listen(app.get('port'), function () {
   console.log("App running on " + app.get('port'));
});
