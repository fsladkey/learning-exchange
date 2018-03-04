import React from 'react'
import UserForm from "../shared/user_form"
import { withRouter } from "react-router"

class MemberForm extends React.Component {

    afterSubmit = () => this.props.router.push(`/groups/${this.props.params.id}/members`);

    render() {
        return (
            <UserForm
                additionalFormData={{ group_id: parseInt(this.props.params.id) }}
                afterSubmit={this.afterSubmit}
                />
        )
    }
}


export default withRouter(MemberForm);
