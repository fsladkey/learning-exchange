import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { userComments } from '../../reducers/selectors'
import CommentForm from './comment_form'

function CommentItem({ comment }) {
  return (
    <li className="comment-item">
      <h4>
        <Link to={ `/profile/${comment.author.username}`}>
          { comment.author.fullname }
        </Link>
        <h5>{ comment.pretty_time }</h5>
      </h4>
      <p>{ comment.body }</p>
    </li>
  )
}

function CommentItems({ showAll, comments }) {
  if (!showAll) {
    let idx = 0
    comments = comments.filter(comment => {
      idx++
      return idx > 5
    })
  }
  const commentItems = comments.map(comment =>
    <CommentItem comment={ comment } key={ comment.id } />
  )

  return (
    <ul>
      { commentItems }
    </ul>
  )
}

function ShowAllButton({ showAll, onClick }) {
  if (showAll) return null
  return (<button onClick={ onClick }>Show all</button>)
}

class ProfileComments extends Component  {

  constructor(props) {
    super(props)
    this.state = { showAll: false }
  }

  showAll = () => {
    // TODO: Replace with infinate scroll
    this.setState({ showAll: true })
  }

  render() {
    const { user, editable, comments } = this.props
    return (
      <section className="profile-comments">
        <CommentForm user={ user } editable={ editable }/>
        <CommentItems comments={ comments } showAll={ this.state.showAll }/>
        <ShowAllButton onClick={ this.showAll } showAll={ this.state.showAll }/>
      </section>
    )
  }
}

function mapStateToProps(state, { user: { id  } }) {
  return { comments: userComments(state, id)}
}

export default connect(mapStateToProps)(ProfileComments)
