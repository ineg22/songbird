import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Player.scss';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidUpdate() {
    const { levelDone } = this.props;
    if (levelDone) {
      this.ref.audioEl.pause();
    }
  }

  render() {
    const { audio } = this.props;
    return (
      <ReactAudioPlayer
        controls
        src={audio}
        ref={el => {
          this.ref = el;
        }}
      />
    );
  }
}
