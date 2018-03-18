import React, { Component } from "react";
import Icon from '../shared/icon'

export default class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false }
    }

    handleClick = () => {
        this.setState(({ open }) => ({ open: false }));
        this.props.onToggle()
    }

    toggleText() {
        return this.props.active ? this.props.inactiveToggleText : this.props.activeToggleText
    }

    statusText() { // move into functional component
        return this.props.active ?
            <span><Icon type="caret-down" /> {this.props.activeStateText}</span> :
            <span><Icon type="caret-down" /> {this.props.inactiveStateText}</span>
    }

    toggleMenu = () => {
        this.setState(({ open }) => ({ open: !open }));
    }

    className() {
        return [
            this.props.active ? "active" : "inactive",
            this.state.open ? "open" : ""
        ].filter(n => n).join(" ")

    }

    render() {
        return (
            <section className="toggle">
                <button className={`lx-button toggle__status ${this.className()}`} onClick={this.toggleMenu}>
                    {this.statusText()}
                </button>
                <button className={`toggle__submit ${this.className()}`} onClick={this.handleClick}>
                    {this.toggleText()}
                </button>
            </section>
        )
    }
}