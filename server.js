const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log('listening on 3000')
})

app.get('/', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/thrive_inventory' + '/main.html')
})

app.get('/indexreusables.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/thrive_inventory' + '/indexreusables.html')
})

app.get('/indexgiveaways.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/thrive_inventory' + '/indexgiveaways.html')
})

app.get('/indexmisc.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/thrive_inventory' + '/indexmisc.html')
})

app.get('/indexprog.html', function(request, response) {
	response.sendFile('/Users/jenniferwilson/Desktop/thrive_inventory' + '/indexprog.html')
})