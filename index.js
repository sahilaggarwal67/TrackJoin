/*jslint node: true*/
"use strict";

var config = require('config'),
	http = require('http'),
	express = require('express'),
	app = express(),
	log4js = require('log4js'),
	lib = require('./lib'),
	server;
	console.log(config);
	server = http.createServer(app);

	log4js.configure(config.logging);
	var logger = log4js.getLogger('rest_proxy_log');

	lib(app);
	
	
app.get('/', function(req, res, next) {
  res.send({"_links":{"self":{"href":"/","method":"GET"},"checkCustomer":{"href":"/{providerId}/customers/{customerId}","method":"HEAD","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"}]},"createCustomer":{"href":"/{providerId}/customers/","method":"POST","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"paramType":"body","required":true,"dataType":{"details":{"type":{"dataType":"string","required":false},"email":{"dataType":"string","required":false},"emailVerified":{"dataType":"boolean","required":false},"address":{"line1":{"dataType":"string","required":false},"line2":{"dataType":"string","required":false},"city":{"dataType":"string","required":false},"district":{"dataType":"string","required":false},"state":{"dataType":"string","required":false},"country":{"dataType":"string","required":false},"postcode":{"dataType":"string","required":false}},"contacts":{"phone":{"dataType":"string","required":false},"alternatePhone":{"dataType":"string","required":false},"fax":{"dataType":"string","required":false},"twitter":{"dataType":"string","required":false},"facebook":{"dataType":"string","required":false},"portalAccount":{"dataType":"string","required":false}},"contactPerson":{"onlyIf":{"type":"BUSINESS"},"academicTitle":{"dataType":"string","required":false},"dateOfBirth":{"dataType":"string","required":false},"document":{"expiryDate":{"dataType":"string","required":false},"id":{"dataType":"string","required":false},"issueDate":{"dataType":"string","required":false},"type":{"dataType":"string","required":false}},"familyName":{"dataType":"string","required":false},"gender":{"dataType":"string","required":false},"givenName":{"dataType":"string","required":false},"maritalStatus":{"dataType":"string","required":false},"personalTitle":{"dataType":"string","required":false}},"familyName":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"gender":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"givenName":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"maritalStatus":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"personalTitle":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}}},"languageId":{"dataType":"long","required":false}}}]},"deleteCustomer":{"href":"/{providerId}/customers/{customerId}","method":"DELETE","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"}]},"getCustomer":{"href":"/{providerId}/customers/{customerId}","method":"GET","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"}]},"getSubscriptionsForCustomer":{"href":"/{providerId}/customers/{customerId}/subscriptions","method":"GET","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"}]},"getCustomerDetails":{"href":"/{providerId}/customers/{customerId}/details","method":"GET","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"}]},"updateCustomerDetails":{"href":"/{providerId}/customers/{customerId}/details","method":"PUT","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"},{"paramType":"body","required":true,"dataType":{"type":{"dataType":"string","required":false},"email":{"dataType":"string","required":false},"emailVerified":{"dataType":"boolean","required":false},"address":{"line1":{"dataType":"string","required":false},"line2":{"dataType":"string","required":false},"city":{"dataType":"string","required":false},"district":{"dataType":"string","required":false},"state":{"dataType":"string","required":false},"country":{"dataType":"string","required":false},"postcode":{"dataType":"string","required":false}},"contacts":{"phone":{"dataType":"string","required":false},"alternatePhone":{"dataType":"string","required":false},"fax":{"dataType":"string","required":false},"twitter":{"dataType":"string","required":false},"facebook":{"dataType":"string","required":false},"portalAccount":{"dataType":"string","required":false}},"contactPerson":{"onlyIf":{"type":"BUSINESS"},"academicTitle":{"dataType":"string","required":false},"dateOfBirth":{"dataType":"string","required":false},"document":{"expiryDate":{"dataType":"string","required":false},"id":{"dataType":"string","required":false},"issueDate":{"dataType":"string","required":false},"type":{"dataType":"string","required":false}},"familyName":{"dataType":"string","required":false},"gender":{"dataType":"string","required":false},"givenName":{"dataType":"string","required":false},"maritalStatus":{"dataType":"string","required":false},"personalTitle":{"dataType":"string","required":false}},"familyName":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"gender":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"givenName":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"maritalStatus":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}},"personalTitle":{"dataType":"string","required":false,"onlyIf":{"type":"RESIDENTIAL || ANONYMOUS"}}}}]},"deleteCustomerDetails":{"href":"/{providerId}/customers/{customerId}/details","method":"DELETE","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"}]},"detachSubscriptionFromCustomer":{"href":"/{providerId}/customers/{customerId}/subscriptions/{subscriptionId}/detach","method":"PUT","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"},{"name":"subscriptionId","required":true,"dataType":"long","paramType":"path"}]},"attachSubscriptionForCustomer":{"href":"/{providerId}/customers/{customerId}/subscriptions/{subscriptionId}/attach","method":"PUT","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"},{"name":"subscriptionId","required":true,"dataType":"long","paramType":"path"}]},"updateCustomerState":{"href":"/{providerId}/customers/{customerId}/state/{customerState}","method":"PUT","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"customerId","required":true,"dataType":"string","paramType":"path"},{"name":"customerState","required":true,"dataType":"CustomerState","paramType":"path"}]},"searchSubscription":{"href":"/{providerId}/search/subscription","method":"POST","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"paramType":"body","required":true,"dataType":{"subscriptionId":{"dataType":"long","required":false},"msisdn":{"dataType":"string","required":false},"imsi":{"dataType":"string","required":false},"iccid":{"dataType":"string","required":false},"imei":{"dataType":"string","required":false}}}]},"searchCustomerBySubscription":{"href":"/{providerId}/search/customer/bysubscription","method":"POST","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"paramType":"body","required":true,"dataType":{"subscriptionId":{"dataType":"long","required":false},"msisdn":{"dataType":"string","required":false},"imsi":{"dataType":"string","required":false},"iccid":{"dataType":"string","required":false},"imei":{"dataType":"string","required":false}}}]},"searchCompactByCustomer":{"href":"/search/compact/bycustomer","method":"POST","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"paramType":"body","required":true,"dataType":{"pagination":{"dataType":{"pageNumber":{"dataType":"int","required":false},"pageSize":{"dataType":"int","required":false},"totalSize":{"dataType":"long","required":false}},"required":false},"sort":{"dataType":{"direction":{"dataType":"string","required":false},"property":{"dataType":"string","required":false}},"required":false},"searchCriteria":{"dataType":"Map[string,string]","required":false}}}]},"getSubscription":{"href":"/{providerId}/subscriptions/{subscriptionId}","method":"GET","parameters":[{"name":"providerId","required":true,"dataType":"long","paramType":"path"},{"name":"subscriptionId","required":true,"dataType":"long","paramType":"path"}]}}});
});

	server.listen(config.server.http.port, function() {
		console.log('Proxy server up. host at ' + config.server.http.host + ', protocol is http and listening on port ' + config.server.http.port);
	}
);