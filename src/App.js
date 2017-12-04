/**
 * PLEASE NOTE
 *
 * This app assumes the presence of '$' 'jQuery' on the global window
 * object since it uses a jQuery plugin for image annotation
 */

import React, {Component} from 'react';
import './App.css';
import Canvas from './Canvas';
import Menu from './Menu';
import {parse as qsParse} from 'query-string';
import {exportImage, getImageDataUrl} from './utils';

const MENU_BUTTONS = [{name: 'Save', fn: exportImage}];

class App extends Component {
  constructor(props) {
    super(props);
    const {imgUri} = Object.assign(
      // Default image
      {imgUri: './images/noimagelarge.png'},
      // eslint-disable-next-line no-undef
      qsParse(window.location.search)
    );

    this.state = {
      imgUri,
      uploading: false,
      uploadError: null,
      done: false,
    };
  }

  handleClick(fn) {
    this.setState(fn(this.state));
  }

  exportDone(err, result) {
    if (err) {
      this.setState({
        ...this.state,
        uploading: false,
        uploadError: err.message,
      });
      return;
    }
    // Otherwise
    this.setState({
      ...this.state,
      uploading: false,
      done: true,
    });
  }

  render() {
    const state = this.state;

    if (state.done) {
      return <p>Done!</p>;
    }

    if (state.uploading) {
      return <p>Uploading...</p>;
    }

    return (
      <div className="App">
        <Canvas
          imgUri={state.imgUri}
          exportDone={(err, result) => this.exportDone(err, result)}
        />
        <Menu buttons={MENU_BUTTONS} onClick={fn => this.handleClick(fn)} />
        {state.uploadError ? (
          <div>
            <span className="error">{state.uploadError}</span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
