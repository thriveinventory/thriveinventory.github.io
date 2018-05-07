const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log('listening on 3000')
})

app.get('../app', function(request, response) {
	response.sendFile(__dirname + '/dashboard.html')
})

app.get('/rentalsform.html', function(request, response){
	response.sendFile(__dirname + '/rentalsform.html')
})

app.get('/main.html', function(request, response){
	response.sendFile(__dirname + '/main.html')
})

app.get('/indexreusables.html', function(request, response) {
	response.sendFile(__dirname + '/indexreusables.html')
})

app.get('/indexgiveaways.html', function(request, response) {
	response.sendFile(__dirname + '/indexgiveaways.html')
})

app.get('/indexmisc.html', function(request, response) {
	response.sendFile(__dirname + '/indexmisc.html')
})

app.get('/indexprog.html', function(request, response) {
	response.sendFile(__dirname + '/indexprog.html')
})

