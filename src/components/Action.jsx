import React, {Component} from 'react';
import {DragSource} from 'react-dnd'

class Action extends Component {
  constructor(props) {
      super(props)
    }

  render() {
    return (
      <div className="action">
        <h3>{this.props.actionName}</h3>
      </div>
    );
  }
}
export default Action;
