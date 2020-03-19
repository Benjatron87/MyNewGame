const express = require('express');
const app = express();
require("./ApiRoutes");

app.use(express.static("../App"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
require("./HtmlRoutes")(app);

const PORT = process.env.PORT ||  8117;

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})