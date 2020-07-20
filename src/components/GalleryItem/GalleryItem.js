import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    showImage: true,
  }

  handleToggleClick = (event) => {
    let newShowImage = true;

    if (this.state.showImage === true) {
      newShowImage = false;
    }

    this.setState({
      showImage: newShowImage
    });
  }

  render() {
    let descOrImg = <p>{this.props.item.description}</p>;

    if (this.state.showImage) {
      descOrImg = <img src={this.props.item.path} alt={this.props.item.description} />;
    }

    return (
      <li>
        <div onClick={this.handleToggleClick}>
          {descOrImg}
        </div>
        <button>Love It!</button>
        <p>0 people love this!</p>
      </li>
    );
  }
}

export default GalleryItem;