var request = require("request"),
    firestore = require("../../Database"),
    log4js = require('log4js'),
	config = require('config');

/*configure logging*/
log4js.configure(config.logging);
var logger = log4js.getLogger('rest_proxy_log');
var loggFileName = new Date().getTime();

var StudentController= {
    create: function(req, res, next) {
		console.log("Hiiii");

        var collectionRef = firestore.collection('student');
console.log("Hiiii");
console.log(collectionRef);
var document = collectionRef.doc('12346');
console.log(document);

// Enter new data into the document.
document.set({
  studentid: '112233',
  studentname: 'sahil',
}).then(() => {
	console.log(document);
  res.send("Student Created successfully");
});
        }
    }        


module.exports = StudentController;