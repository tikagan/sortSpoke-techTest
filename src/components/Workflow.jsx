import React, {Component} from 'react';
import {DropTarget} from 'react-dnd'


const Types = {
  WORKFLOW: 'workflow'
}

const workflowTarget = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      //do this thing
      return
    }
    const item = monitor.getItem()
    //this is where the do the state update
  }
}

function collect(connect, monitor) {
  return {
    //call this function inside render(
    //to let react-dnd handle the drag events
    connectDropTarget: connect.dropTarget(),
    itemType: monitor.getItemType()
  }
}

class Workflow extends Component {

  render() {
    return (
      <div id="workflow">
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget(Types.WORKFLOW, workflowTarget, collect)(Workflow);
