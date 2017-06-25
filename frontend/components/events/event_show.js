import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/event_actions'
import EventMap from './event_map'
import TagList from '../shared/tag_list'
import Spinner from '../shared/spinner'
import { fadeIn } from '../../utils/misc'
import RSVP from './rsvp'
import CancelEventButton from './cancel_event_button'

class EventShow extends Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.params.id).then()
  }

  render() {
    const { event, children } = this.props
    if (!event) return <Spinner />
    return (
      <section ref={ fadeIn }>
        <section className="event-header">
          <h2>{ event.name } <CancelEventButton event={ event } /></h2>
          <TagList tags={ event.tags }/>
          <p>{ event.description }</p>
          <RSVP eventId={ event.id }/>
        </section>
        <EventMap event={ event }/>
        { children }
      </section>
    )
  }
}


const mapStateToProps = ({ events }, { params }) => ({
  event: events.get(params.id)
})

export default connect(
  mapStateToProps,
  { fetchEvent: actions.fetchOneEvent }
)(EventShow)
