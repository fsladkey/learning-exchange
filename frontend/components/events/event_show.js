import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import actions from '../../actions/event_actions'
import EventMap from './event_map'
import EventNav from './event_nav'
import TagList from '../shared/tag_list'
import Spinner from '../shared/spinner'
import { fadeIn } from '../../utils/misc'
import RSVP from './rsvp'
import EventOptions from './event_options'

class EventShow extends Component {

  componentDidMount() {
    this.props.fetchEvent(this.props.params.id)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.fetchEvent(newProps.params.id)
    }
  }

  render() {
    const { event, children } = this.props
    if (!event) return <Spinner />
    return (
      <section ref={ fadeIn }>
        <section className="event-header">
          <h2>{ event.name } <EventOptions event={ event } /></h2>
          <h4><Link to={`/groups/${event.group.id}`}>{event.group.name}</Link></h4>
          <p className="event-creator">
            Created by {event.creator.firstname} {event.creator.lastname}
          </p>
          <TagList tags={ event.tags } />
          <p>{ event.description }</p>
          <RSVP eventId={ event.id } />
        </section>
        <EventNav event={ event } />
        { children }
      </section>
    )
  }
}
const events = [];


const mapStateToProps = ({ events }, { params }) => ({
  event: events.get(params.id)
})

export default connect(
  mapStateToProps,
  { fetchEvent: actions.fetchOneEvent }
)(EventShow)
