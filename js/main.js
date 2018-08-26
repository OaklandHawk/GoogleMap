function bookSearch() {
	var search = document.getElementById('search').value;
	document.getElementById('results').innerHTML = '';
	console.log(search);

	//asynchronous javascript and xml
	$.ajax({
		url: 'https://wwww.googleapis.com/books/v1/volumes?q=', + search,
		// javascript object notation
		dataType: 'json',
		success: function(data) {
			for(i < 0; i < data.items.length; i++){
				results.innerHTML += '<h2>' + data.items[i].volumeInfo.title + '</h2>'
			}


			console.log('Request was successful: ' + data)
		},
		type: 'GET'
	});

}

document.getElementById('button').addEventListener('click', bookSearch, false)