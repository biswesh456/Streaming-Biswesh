const React = require("react");

// Props that should be passed
//      -width : width of the control bar
//      -setVideoSpeed : handler when speed is changed
//      -vidPlay : to play/resume the video
//      -vidPause : to pause the video
//      -toggleMute : to mute/unmute video
//      -seekVideo : handler when value of seek bar is changed
//      -changeVolume : handler for when volume bar value is changed
//      -toggleFullscreen : Function to take video to full screen
//      -vidTime :  Current duration of video to set the value of seek bar

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
            <div className="video-controls">
                <button type="button" className="vc-play-pause" onClick={this.togglePlayPause.bind(this)}>
                    {this.state.play ? "Pause" : "Play"}
                </button>
                <input type="range" className="vc-seek-bar" value={this.props.vidTime} onChange={(e) => this.props.seekVideo(e.target.value)} onMouseDown={this.seekBarMD.bind(this)} onMouseUp={this.seekBarMU.bind(this)}/>
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
        this.setState((prevState, props) => {
            // Used by mouse up event to maintain the same play
            // state after seek. Not related to UI render, hence
            // it need not be a component state.
            this.playBeforeSeek = prevState.play;
            return {
                play: false
            };
        });
        this.props.vidPause();
    }

    seekBarMU() {
        // If video was playing before seek then resume video
        if(this.playBeforeSeek) this.props.vidPlay();
        this.setState({
            play: this.playBeforeSeek
        });
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

    changeVolume(event) {
        var newVol = event.target.value;
        this.setState({
            volume: newVol
        });
        this.props.changeVolume(newVol);
    }
};

module.exports = VideoControls;