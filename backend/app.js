var express = require('express')
var app = express()


  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }






var mockGroups = [{
		id: 'g1',
		name: 'trialGrp',
		members: ['u1','u2'],
		stores: ['s1']
	}]

var mockUsers = [{
		id: 'u1',
		name: 'Daria'
	},
	{
		id: 'u2',
		name: 'Hendrik'
	}]

var mockStores = [{
    uuid : guid(),
    name : 'Magnus',
    street : 'Somewhere',
    city : 'Cologne',
    plz : '12345'
	},
	{
    uuid : guid(),
    name : 'Pizza Pazza',
    street : 'Somewhere',
    city : 'Cologne',
    plz : '12345'
	}]

/**
*	Basic GET endpoints
*/
app.get('/group', function (req, res) {
  	res.send(mockGroups);
})

app.get('/user', function (req, res) {
  	res.send(mockUsers);
})

app.get('/store', function (req, res) {
  	res.send(mockStores);
})

app.get('/group/:groupId', function (req, res) {
	console.log(req.params);
	//console.log(res);
  res.send('Hello World! From group/:groupId');
})




/**
*	Bootstrap of the backend
*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
