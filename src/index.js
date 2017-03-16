// Inside of src/index.js, render the App component to the DOM and explore the codebase to get an understanding of each component's responsibility

ReactDOM.render(<App searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY}/>, 
	document.getElementById('app')
	);