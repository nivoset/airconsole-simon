const express = require("express"),
   path = require("path"),
   app = express();

app.set('port', (process.env.PORT || 3000));

app.use("/", function (req, res) {
   res.send("pages/index");
});
app.use("screen", express.static(path.resolve(_dirname, "screen")));
app.use("controller", express.static(path.resolve(_dirname, "controller")));


app.listen(app.get('port'), function () {
   console.log("App running on " + app.get('port'));
});
