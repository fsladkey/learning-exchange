import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/direct_message_actions'
import { conversations } from '../../reducers/selectors'

class Conversation extends Component {

  constructor(props) {
    super(props)
    this.state = { body: "" }
  }

  clearForm = () => {
    this.setState({ body: "" })
  }

  handleChange = (e) => {
    this.setState({ body: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage({
      body: this.state.body,
      receiver_id: this.props.receiver_id
    }).then(this.clearForm)
  }

  render() {
    const { currentUser } = this.props;
    return (
      <form onSubmit={ this.handleSubmit } className="message-form">
        <input
          type="text"
          onChange={ this.handleChange }
          value={ this.state.body }
          placeholder="Write a message"
          />
          <button>Send</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    conversations: conversations(state)
  }
}

export default connect(
  mapStateToProps,
  { sendMessage: actions.createDirect_message  }
)(Conversation)