const React = require("React");

// Props that should be passed
//      -width : width of the control bar
//      -setVideoSpeed
//      -togglePlayPause
//      -toggleMute
//      -seekBarOnChange
//      -seekBarMD : Function to pause video on "onMouseDown" event
//      -seekBarMU : Function to play/resume video on "onMouseUp" event
//      -changeVolume
//      -vidTime :  Current duration of video to set the value of seekbar

var VideoControls = React.createClass({
    getInitialState: function(){
        return {
            play: true,
            mute: true,
            speed: "Normal"     // Currently selected speed
        };
    },
    
    render: function(){
        return (
            <div id="video-controls">
                <button type="button" className="vc-play-pause" onClick={this.togglePlayPause}>
                    {this.state.play ? "Play" : "Pause"}
                </button>
                <input type="range" className="vc-seek-bar" value={this.props.vidTime} onChange={this.seekVideo} onMouseDown={this.props.seekBarMD} onMouseUp={this.props.seekbarMU}/>
                <button type="button" className="vc-mute-btn" onCLick={this.toggleMute}>{this.state.muteButton}</button>
                <input type="range" className="vc-volume-bar" min="0" max="1" step="0.1" value="1" onChange={this.changeVolume}/>
                <button type="button" className="vc-full-screen" onClick={this.toggleFullScreen}>Full-Screen</button>
                <select className="vc-speed-control" value={this.state.speed} onChange={this.setVideoSpeed}>
                    <option value="0.25">0.25</option>
                    <option value="0.75">0.75</option>
                    <option value="1">Normal</option>
                    <option value="1.25">1.25</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                </select>
            </div>
        );
    },

    togglePlayPause: () => {
        this.setState(function (prevState, props) {
            play: !prevState.play
        });
        this.props.togglePlayPause();
    },

    toggleMute: () => {
        this.setState(function (prevState, props) {
            mute: !prevState.mute
        });
        this.props.toggleMute();
    },

    setVideoSpeed: (event) => {
        this.props.setVideoSpeed(parseInt(event.target.value));
    },

    toggleFullScreen: () => {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
            document.exitFullscreen();
            } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            }
        }
    },

    seekVideo: (event) => {
        this.props.seekVideo(event.target.value);
    },

    changeVolume: (event) => {
        this.props.changeVolume(event.target.value);
    }
});

module.exports = VideoControls;