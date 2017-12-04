import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Canvas.css';
import {uploadImage} from './utils';

class Canvas extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    const canvas = $('#canvas');
    const self = this;
    const {imgUri} = self.props;

    canvas.annotate({
      // Height and width hardcoded to 500x500
      color: 'red', // Color for shape and text
      type: 'rectangle', // default shape: can be "rectangle", "arrow" or "text"
      images: [imgUri], // Array of images path : ["images/image1.png", "images/image2.png"]
      linewidth: 2, // Line width for rectangle and arrow shapes
      fontsize: '20px', // font size for text
      bootstrap: true, // Bootstrap theme design
      position: 'top', // Position of toolbar (available only with bootstrap)
      idAttribute: 'id', // Attribute to select image id.
      selectEvent: 'change', // listened event to select image
      unselectTool: false, // display an unselect tool for mobile
      onExport(image) {
        uploadImage(image).then(networkResult => {
          const {err, result} = networkResult;
          self.props.exportDone(err, result);
        });
      }, // Action when export function is called, with data uri as params (default log to console)
    });
  }
  render() {
    return <div id="canvas" className="canvas" />;
  }
}

// Prop types for canvas
Canvas.propTypes = {
  imgUri: PropTypes.string,
  exportDone: PropTypes.func,
};

export default Canvas;
