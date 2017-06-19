import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import BigCalendar from 'react-big-calendar'
import { setModal } from '../../actions/modal_actions'
import { setFormField } from '../../actions/form_actions'
import Spinner from '../shared/spinner'
import events from './events'

// const allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

BigCalendar.momentLocalizer(moment); 

function eventToCalenderElement(event) {
    return {
    id: event.id,
    title: event.name,
    start: new Date(event.start),
    end: new Date(event.end),
    desc: event.description
  }
}


function EventCalendar({ events, setFormField, setModal, router, params }) {
    function onSelectEvent(event) {
        router.push(`/events/${event.id}`)
    }

    function onSelectSlot({ start, end }) {
        setFormField("event", "start", start)
        setFormField("event", "end", end)
        setFormField("event", "group_id", parseInt(params.id))
        setModal("eventForm")
    }

    return (
        <BigCalendar
            selectable
            events={events.map(eventToCalenderElement)}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            defaultDate={new Date()}
        />
    )
}

const mapStateToProps = ({ groups }, { params }) => ({
  events: groups.get(params.id).events
})

export default withRouter(connect(mapStateToProps, { setFormField, setModal })(EventCalendar))