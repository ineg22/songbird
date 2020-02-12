import React, { Component } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './Player.scss';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidUpdate() {
    const { levelDone } = this.props;
    if (levelDone) {
      this.ref.audio.pause();
    }
  }

  render() {
    const { audio } = this.props;
    return (
      <ReactAudioPlayer
        autoPlayAfterSrcChange={false}
        showVolumeControl={false}
        showLoopControl={false}
        showJumpControls={false}
        autoPlay={false}
        src={audio}
        ref={el => {
          this.ref = el;
        }}
      />
    );
  }
}
