import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Player.scss';

export default function Player(props) {
  const { audio } = props;
  return <ReactAudioPlayer src={audio} controls controlsList="play" />;
}
