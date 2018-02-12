import React, {Component} from 'react';
import {DragSource} from 'react-dnd'

const Types = {
  ACTION: 'action'
}

const actionSource = {

  beginDrag(props) {
    return {
      listId: props.listId,
      action: props.actionName
    };
  },
}

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
export default DragSource(Types.ACTION, actionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Action)
