import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <li>
        <img src={this.props.item.path} alt={this.props.item.description} />
        <p>{this.props.item.description}</p>
        <button>Love It!</button>
        <p>0 people love this!</p>
      </li>
    );
  }
}

export default GalleryItem;