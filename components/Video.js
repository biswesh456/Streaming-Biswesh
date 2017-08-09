const React = require('react');

// Props that should be passed
//      -width : video player width
//      -height : video player height
//      -vidsrc : video source/URL
//      -vidtype : video type

// Add timeupdate eventlistener
var Video = React.createClass({
    getInitialState: function () {
        return {
            vidTime: 0
        };
    },

    render: function () {
        return (
            <div className="video-container">
                <video width={this.props.width} height={this.props.height} ref={el => this.video = el} onTimeUpdate={this.vidTimeUpdate}>
                    <source src={this.props.vidsrc} type={this.props.vidtype} />
                </video>
                <VideoController 
                    width={this.prop.width}
                    setVideoSpeed={this.setVideoSpeed}
                    togglePlayPause={this.togglePlayPause}
                    toggleMute={this.toggleMute}
                    seekBarOnChange={this.seekVideo}
                    seekBarMD={this.seekBarMD}
                    seekBarMU={this.seekBarMU}
                    changeVolume={this.changeVolume}
                    vidTime={this.state.vidTime}
                />
            </div>
        );
    },

    onTimeUpdate: () => {
        var seekBarVal = (100 / this.video.duration) * this.video.currentTime;
        this.setState({
            vidTime: seekBarVal
        });
    },
    
    setVideoSpeed: (speed) => {
        this.video.playbackRate = speed;
    },

    togglePlayPause: () => {
        if (this.video.paused == true) {
            video.play();
        } else {
            video.pause();
        }
    },

    toggleMute: () => {
        if (this.video.muted == false) {
            this.video.muted = true;
        } else {
            this.video.muted = false;
        }
    },

    seekVideo: (seekBarVal) => {
        this.video.currentTime = this.video.duration * (seekBarVal / 100);
    },

    seekBarMD: () => {
        this.video.pause();
    },

    seekBarMU: () => {
        this.video.play();
    },

    changeVolume: (volume) => {
        this.video.volume = volume;
    }
});

module.exports = Video;