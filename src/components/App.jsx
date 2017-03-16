

class App extends React.Component {

  constructor(props) {
    super(props);
    //console.log('props in constructor: ', props);
    //console.log('this in constructor of app: ', this);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoListEntries: window.exampleVideoData
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('cats');
  } 

  getYouTubeVideos(query) {

    //console.log('props in getYouTubeVideos: ', this.props);
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoListEntries: videos,
        currentVideo: videos[0]
      });
    });
  }

  playThisVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoListEntries} playThisVideo={this.playThisVideo.bind(this)} key={'key'}/> 
        </div>
      </div>
    );

  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//Pass exampleVideoData into the VideoList component