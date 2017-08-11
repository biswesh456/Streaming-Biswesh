const React = require('react');
const VideoControls = require('./VideoControls');

// Props that should be passed
//      -width : video player width
//      -height : video player height
//      -vidsrc : video source/URL
//      -vidtype : video type
//      -vidID : ID to identify the video

class Video extends React.Component {
    constructor(props) {
        super(props);

        // Initializing the state object
        this.state = {
            vidTime: 0,     // Percentage of video played
        };

        // Denotes if the video player is in fullscreen mode
        this.fullscreen = false;
    }

    render() {
        return (
            <div className="video-container" id={this.props.vidID}>
                <video width={this.props.width} height={this.props.height} ref={el => this.video = el} onTimeUpdate={this.onTimeUpdate.bind(this)}>
                    <source src={this.props.vidsrc} type={this.props.vidtype} />
                </video>
                <VideoControls 
                    width={this.props.width}
                    setVideoSpeed={this.setVideoSpeed.bind(this)}
                    vidPause={this.vidPause.bind(this)}
                    vidPlay={this.vidPlay.bind(this)}
                    toggleMute={this.toggleMute.bind(this)}
                    seekVideo={this.seekVideo.bind(this)}
                    changeVolume={this.changeVolume.bind(this)}
                    toggleFullscreen={this.toggleFullscreen.bind(this)}
                    vidTime={this.state.vidTime}
                />
            </div>
        );
    }

    onTimeUpdate() {
        var seekBarVal = (100.00 * this.video.currentTime) / this.video.duration;
        this.setState({
            vidTime: seekBarVal
        });
    }
    
    setVideoSpeed(speed) {
        this.video.playbackRate = speed;
    }

    vidPause() {
        this.video.pause();
    }

    vidPlay() {
        this.video.play();
    }

    toggleMute() {
        this.video.muted = !this.video.muted;
    }

    seekVideo(seekBarVal) {
        this.video.currentTime = this.video.duration * (seekBarVal / 100);
    }

    changeVolume(volume) {
        this.video.volume = volume;
    }

    // NOT WORKING!!
    toggleFullscreen() {
        if(this.fullscreen) {
            document.webkitExitFullscreen();
        } else {
            this.screen.webkitRequestFullscreen();
        }
        this.fullscreen = !this.fullscreen;
    }
};

module.exports = Video;