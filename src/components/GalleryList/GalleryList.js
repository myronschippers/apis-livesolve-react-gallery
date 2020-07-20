import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const displayList = this.props.galleryList.map((item, index) => {
      return <GalleryItem
        getGallery={this.props.getGallery}
        item={item}
        key={item.id}
      />;
    });

    return (
      <div>
        <ul>{displayList}</ul>
      </div>
    );
  }
}

export default GalleryList;