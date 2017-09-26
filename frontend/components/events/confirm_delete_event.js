import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Actions from "../../actions/event_actions"
import { setModal } from "../../actions/modal_actions"

export function ConfirmDeleteEvent({ id, destroyEvent, setModal, router }) {
    const cancelEvent = () => {
        destroyEvent(id).then(event => {
            setModal(null)
            router.push("/")
        })
    }
    return (
        <div className="confirm-box">
            <p>Are you sure you want to delete this event?</p>
            <button className="lx-button" onClick={ cancelEvent }>Confirm</button>
        </div>
    )
}

function mapStateToProps({ eventForm }) {
    return { id: eventForm.get("id") }
}

export default withRouter(connect(
    mapStateToProps,
    { destroyEvent: Actions.destroyEvent, setModal }
)(ConfirmDeleteEvent))