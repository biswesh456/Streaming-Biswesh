const React = require("react");

// Props that should be passed
//      -width : width of the control bar
//      -setVideoSpeed
//      -togglePlayPause
//      -toggleMute
//      -seekBarOnChange
//      -changeVolume
//      -toggleFullscreen : Function to take video to full screen
//      -vidTime :  Current duration of video to set the value of seekbar

class VideoControls extends React.Component {
    constructor(props) {
        super(props);

        // Initializing the state object
        this.state = {
            play: false,    // Content of play button
            mute: false,    // Content of mute button
            speed: "1",     // Currently selected speed
            volume: 1       // Current volume value
        };
    }
    
    render() {
        return (
            <div id="video-controls">
                <button type="button" className="vc-play-pause" onClick={this.togglePlayPause.bind(this)}>
                    {this.state.play ? "Pause" : "Play"}
                </button>
                <input type="range" className="vc-seek-bar" value={this.props.vidTime} onChange={this.seekVideo.bind(this)} onMouseDown={this.seekBarMD.bind(this)} onMouseUp={this.togglePlayPause.bind(this)}/>
                <button type="button" className="vc-mute-btn" onClick={this.toggleMute.bind(this)}>
                    {this.state.mute ? "Unmute" : "Mute"}
                </button>
                <input type="range" className="vc-volume-bar" min="0" max="1" step="0.1" value={this.state.volume} onChange={this.changeVolume.bind(this)}/>
                <button type="button" className="vc-full-screen" onClick={this.props.toggleFullscreen}>Full-Screen</button>
                <select className="vc-speed-control" value={this.state.speed} onChange={this.setVideoSpeed.bind(this)}>
                    <option value="0.25">0.25</option>
                    <option value="0.5">0.5</option>
                    <option value="0.75">0.75</option>
                    <option value="1">Normal</option>
                    <option value="1.25">1.25</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                </select>
            </div>
        );
    }

    togglePlayPause() {
        this.state.play ? this.props.vidPause() : this.props.vidPlay();
        this.setState((prevState, props) => ({
            play: !prevState.play
        }));
    }

    seekBarMD() {
        this.setState((prevState, props) => ({
            play: !prevState.play
        }));
        this.props.vidPause();
    }

    toggleMute() {
        this.setState((prevState, props) => ({
            mute: !prevState.mute
        }));
        this.props.toggleMute();
    }

    setVideoSpeed(event) {
        var newSpeed = event.target.value;
        this.setState({
            speed: newSpeed
        })
        this.props.setVideoSpeed(newSpeed);
    }

    seekVideo(event) {
        this.setState({
            seekBarVal: event.target.value
        });
        this.props.seekBarOnChange(event.target.value);
    }

    changeVolume(event) {
        this.setState({
            volume: event.target.value
        });
        this.props.changeVolume(event.target.value);
    }
};

module.exports = VideoControls;