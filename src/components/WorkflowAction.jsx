import React, {Component} from 'react';
import {DragSource} from 'react-dnd'

  const Types = {
    WORKFLOW_ACTION : 'workflow-action'
  }

  const workflowSource = {
    canDrag(props) {
      return props.isReady
    },

    beginDrag(props, monitor, component) {
      const item = {id: props.id}
      return item
    },

    endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
        return
      }

      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()

    //increment action id/prevStage/nextStage

    }
  }

  function collect(connect, monitor) {
    return {
      //call this function inside render()
      //to let react-dnd handle the drag events
      connectDragSource: connect.dragSource()
    }
  }

  class WorkflowAction extends Component {
    render() {
      const { card, isDragging, connectDragSource, connectDropTarget } = this.props;
      const opacity = isDragging ? 0 : 1;

        return connectDragSource(connectDropTarget(
          <div className="workflow-action">
            <h3>{this.props.actionName}</h3>
          </div>
        ))
      }
    }
export default DragSource (Types.WORKFLOW_ACTION, workflowSource, collect)(WorkflowAction);
