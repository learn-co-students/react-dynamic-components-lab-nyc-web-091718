import React, { Component } from 'react'

export default class Comment extends Component {
  render () {
    const commentText = this.props.commentText
    return (
      <div className="comment">{commentText}</div>
    )
  }

}
