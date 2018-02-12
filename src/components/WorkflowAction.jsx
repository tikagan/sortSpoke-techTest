import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {DropTarget} from 'react-dnd'
import {DragSource} from 'react-dnd'
import flow from 'lodash/flow'

const Types = {
  WORKFLOW: 'workflow',
  ACTION: 'action'
}

const workflowActionSource = {

  beginDrag(props) {
    return {
      index: props.index,
      listId: props.listId,
      workflowAction: props.action
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    if ( dropResult && dropResult.listId !== item.listId ) {
      props.removeWorkflowAction(item.index);
    }
  }
}

const workflowActionTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceListId = monitor.getItem().listId;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = ReactDOM.findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    // Time to actually perform the action
    if ( props.listId === sourceListId ) {
      props.moveWorkflowAction(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
		monitor.getItem().index = hoverIndex;
    }
  }
};
// don't need this anymore because flow in the export statement
//   function collect(connect, monitor) {
//     return {
//       //call this function inside render()
//       //to let react-dnd handle the drag events
//       connectDragSource: connect.dragSource()
//     }
//   }

class WorkflowAction extends Component {

  render() {
    const { actionName, isDragging, connectDragSource, connectDropTarget } = this.props;
    // const opacity = isDragging ? 0 : 1;

      return connectDragSource(connectDropTarget(
        <div className='workflow-action'>
          <h3>{actionName}</h3>
        </div>
      ))
    }
  }

export default flow(
	DropTarget(Types.WORKFLOW, workflowActionTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	})),
	DragSource(Types.WORKFLOW, workflowActionSource, (connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}))
)(WorkflowAction);
