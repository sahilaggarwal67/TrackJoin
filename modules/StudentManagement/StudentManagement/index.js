var routes = require("./route");

var root = function(app) {
    console.log("StudentManagement Module loaded");
    
    app.use("/student/", routes);

    
};
module.exports = root;