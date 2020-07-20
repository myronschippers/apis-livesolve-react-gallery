import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const displayList = this.props.galleryList.map((item, index) => {
      return <li key={item.id}>{item.description}</li>;
    });

    return (
      <div>
        <ul>{displayList}</ul>
      </div>
    );
  }
}

export default GalleryList;