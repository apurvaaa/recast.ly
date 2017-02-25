var searchYouTube = ({key, query, max}, callback) => {
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
	url: 'https://www.googleapis.com/youtube/v3/search',
	type: 'GET',
	contentType: 'application/json',
	data: {
		part: 'snippet', 
		q: query,
		type: 'video',
		key: key,
		maxResults: max,
	    videoEmbeddable: true
	   },
	
	success: function (data) {

	  console.log('data', data.items);
	  callback(data.items);
	},
	error: function (data) {
	  // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error

	  console.error('videos array failed', data);
	}
  });
};

window.searchYouTube = searchYouTube;
