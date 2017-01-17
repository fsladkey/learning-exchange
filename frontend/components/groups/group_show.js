import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../actions/group_actions'
import GroupNav from './group_nav'
import TagList from '../shared/tag_list'
import Spinner from '../shared/spinner'

const fadeIn = node => $(node).hide().fadeIn()

class GroupShow extends Component {
  componentDidMount() {
    this.props.fetchGroup(this.props.params.id).then()
  }

  render() {
    const { group, children } = this.props
    if (!group) return <Spinner />
    return (
      <section ref={ fadeIn }>
        <section className="sub-header">
          <h2>{ group.name }</h2>
          <TagList tags={ group.tags }/>
          <p>{ group.description }</p>
        </section>
        <GroupNav group={ group }/>
        { children }
      </section>
    )
  }
}


const mapStateToProps = ({ groups }, { params }) => ({
  group: groups.get(params.id)
})

export default connect(
  mapStateToProps,
  { fetchGroup: Actions.fetchOneGroup }
)(GroupShow)
