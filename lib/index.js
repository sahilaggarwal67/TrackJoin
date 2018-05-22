"use strict";

var walk = require('walk'),
    fs = require('fs'),
    path = require('path');
	
// Original function
function getDirsSync(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function loadLib(app) {
    var basePath = path.resolve(__dirname, '..', "modules"),
        allModules = getDirsSync(basePath);
    for(var i in allModules) {
        var subModules = getDirsSync(basePath+"/"+allModules[i]);
		for(var j in subModules)
			require(basePath+"/"+allModules[i] + "/" + subModules[j])(app);
    }
    console.log("All modules loaded");
};

module.exports = loadLib;