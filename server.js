const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log('listening on 3000')
})

app.get('/', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/ThriveCode' + '/dashboard.html')
})

app.get('/rentalsform.html', function(request, response){
	response.sendFile('/Users/jenniferwilson/Desktop/ThriveCode' + '/rentalsform.html')
})

app.get('/main.html', function(request, response){
	response.sendFile('/Users/jenniferwilson/Desktop/ThriveCode' + '/main.html')
})

app.get('/indexreusables.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/ThriveCode' + '/indexreusables.html')
})

app.get('/indexgiveaways.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/ThriveCode' + '/indexgiveaways.html')
})

app.get('/indexmisc.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/ThriveCode' + '/indexmisc.html')
})

app.get('/indexprog.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/ThriveCode' + '/indexprog.html')
})