const express = require("express"),
   path = require("path"),
   app = express();

app.set('port', (process.env.PORT || 3000));

app.use("/controller.html", function (req, res) {
   res.sendFile(path.resolve(__dirname, "controller.html"));
});
app.use("/screen.html", function (req, res) {
   res.sendFile(path.resolve(__dirname, "screen.html"));
});
app.use("/", function (req, res) {
   res.sendFile(path.resolve(__dirname, "screen.html"));
});
app.use("screen", express.static(path.resolve(__dirname, "screen")));
app.use("controller", express.static(path.resolve(__dirname, "controller")));


app.listen(app.get('port'), function () {
   console.log("App running on " + app.get('port'));
});
