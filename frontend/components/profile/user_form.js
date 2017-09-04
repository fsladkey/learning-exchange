import React from 'react'
import Select from 'react-select';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setFormField } from '../../actions/form_actions'
import { createUserFromStore, updateUserFromStore } from '../../actions/user_actions'
import { preventDefault } from '../../utils/misc'
import { setModal } from '../../actions/modal_actions'

const USER_FORM_FIELDS = [ // use reducer initial state keys?
    "username",
    "firstname",
    "middlename",
    "lastname",
    "email",
    "zipcode",
    "password",
    "password_confirmation"
]

class UserForm extends React.Component {

    clearForm() {
        USER_FORM_FIELDS.forEach((field) => {
            this.props.setFormField("user", field, "")
        })
    }

    handleChange = (name) => (e) => {
        this.props.setFormField("user", name, e.currentTarget.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.submitForm().then((event) => {
            this.props.setModal(null)
            this.clearForm()
        })
    }

    submitForm() {
        return this.props.userForm.get("id") ? this.props.updateUser() : this.props.createUser();
    }

    render() {
        const titleText = this.props.userForm.get("id") ? "User Settings" : "Create User"
        const submitText = this.props.userForm.get("id") ? "Update Profile" : "Create User"
        const { userForm, setFormField } = this.props;
        // add maxlength to zipcode
        return (
            <section className="form user-form">
                <h2><span>{titleText}</span><i className="fa fa-user" /></h2>
                <form onSubmit={preventDefault}>
                    {
                        USER_FORM_FIELDS.map((field, idx) => 
                            <div key={idx} className={`user-${field}`}>
                                <label htmlFor={`user-${field}`}>{ field }</label>
                                <input
                                    id={`user-${field}`}
                                    onChange={this.handleChange(field)}
                                    value={userForm.get(field) || ""}
                                    type={field.includes("password") ? "password" : "text"}
                                />
                            </div>
                        )
                    }
                    <button className="lx-button" type="button" onClick={this.handleSubmit} >{submitText}</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = ({ userForm }) => ({ userForm });

export default withRouter(connect(
    mapStateToProps,
    { setFormField, setModal, createUser: createUserFromStore, updateUser: updateUserFromStore }
)(UserForm))
