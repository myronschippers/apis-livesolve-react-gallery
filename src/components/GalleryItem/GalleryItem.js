import React, { Component } from 'react';
import axios from 'axios';

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

  clickLoveIt = () => {
    console.log('LOVE IT');
    alert('We are updating likes from ' + this.props.item.likes);
    this.updateLike();
  }

  updateLike() {
    axios({
      method: 'PUT',
      url: '/gallery/like/' + this.props.item.id,
      // data:
    })
      .then((response) => {
        this.props.getGallery();
      })
      .catch((err) => {
        console.log(err);
        alert('Oh darn');
      });
  }

  render() {
    let descOrImg = <p>{this.props.item.description}</p>;

    if (this.state.showImage) {
      descOrImg = <img src={this.props.item.path} alt={this.props.item.description} />;
    }

    return (
      <li>
        <div className={this.props.className} onClick={this.handleToggleClick}>
          {descOrImg}
        </div>
        <div>
          <button onClick={this.clickLoveIt}>Love It!</button>
          <p>{this.props.item.likes} people love this!</p>
        </div>
      </li>
    );
  }
}

export default GalleryItem;