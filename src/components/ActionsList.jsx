import React, {Component} from 'react';
import Action from './Action.jsx'
import {DropTarget} from 'react-dnd'

class ActionsList extends Component {

  toRender = function() {
    const act = this.props.actions.map((action) =>
      <Action actionName={action} key={action}></Action>
    )
    return (
      <div id="actions-list">{act}</div>
    )
  }

  render() {
    return (
      <div id="actions-container">
        {this.toRender()}
      </div>
    )
  }
}
export default ActionsList;
