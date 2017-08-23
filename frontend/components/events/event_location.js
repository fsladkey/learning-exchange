import React from "react"
import moment from "moment"
import { connect } from "react-redux"
import EventMap from "./event_map"

const FORMAT = "MMMM Do YYYY, h:mm a"

export function EventLocation({ event }) {
    return (
        <section className="map-container">
          <div className="event-address">
            <p className="label">Start <i className="fa fa-clock-o" /></p>
            <p className="event-info">{moment(event.start_time).format(FORMAT)}</p>
            <p className="label">End <i className="fa fa-clock-o" /></p>
            <p className="event-info">{moment(event.end_time).format(FORMAT)}</p>
            <p className="label address">Address <i className="fa fa-map-marker" /></p>
            <p className="event-info">{event.address}</p>
          </div>
          <EventMap event={ event } />
        </section>
    );
}

const mapStateToProps = ({ events }, { params }) => ({
  event: events.get(params.id)
})

export default connect(mapStateToProps)(EventLocation)