import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opacity = this.props.opacity > 1 ? 1 : this.props.opacity
    return opacity >= 0.2 ? (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={opacity - 0.1}/>
      </div>
    ) : null
  }

}
