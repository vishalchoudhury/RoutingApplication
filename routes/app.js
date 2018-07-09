/**
 * http://usejsdoc.org/
 */

//Traditional-way

/*const http = require('http');

const fs = require('fs');

const server = http.createServer(function(req,res) {
	
	console.log('user requested: '+req.url);
	
	if(req.url === '/' || req.url === '/home') {
		
		res.writeHead(200,{'Content-Type' : 'text/html'});
		
		fs.createReadStream(__dirname+'/home.html','utf8').pipe(res);
	
	} else if(req.url === '/contact') {
		
		res.writeHead(200,{'Content-Type' : 'text/html'});
	
		fs.createReadStream(__dirname+'/contact.html','utf8').pipe(res);
	
	} else {
		
		res.writeHead(200,{'Content-Type' : 'text/html'});
		
		fs.createReadStream(__dirname+'/404.html','utf8').pipe(res);
	}
});

server.listen(80,'127.0.0.1');
*/

//Express way

const express = require('express');

const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

app.use('assets',express.static('/assets'));

app.get('/',function(req,res) {
	
	//fs.createReadStream(__dirname+'/home.html','utf8').pipe(res);
	
	//res.sendFile(__dirname+'/home.html');
	
	res.render('home');

});

app.get('/contact',function(req,res) {
	
	//res.sendFile(__dirname+'/contact.html');
	
	res.render('contact');
	
});

app.get('/profile/:name',function(req,res) {
	
	data = {age:'25', job: 'software engineer', hobbies: ['eating','cycling','reading']};
	//res.send('You are viewing the profile of '+req.params.profile);
	res.render('profile',{person: req.params.name, data: data});

});

app.listen(80,'127.0.0.1');

console.log('Server is running at 80 port');


