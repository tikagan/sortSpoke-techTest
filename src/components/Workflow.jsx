import React, {Component} from 'react';
import {DropTarget} from 'react-dnd'
import update from 'react/lib/update'
import WorkflowAction from './WorkflowAction.jsx'

//once actionList is set up, add action type here and a method to mutate
//dropped actions into workflowActions
const Types = {
  WORKFLOW: 'workflow'
}

//react dnd methods above Workflow definiton

const workflowTarget = {
  drop(props, monitor, component) {
    const { id } = props;
    const sourceObj = monitor.getItem();
    if ( id !== sourceObj.listId ) component.pushWorkflowAction(sourceObj.workflowAction);
    return {
      listId: id
    };
  }
}

//implemented in the export rn, but maybe extract it later?
// function collect(connect, monitor) {
//   return {
//     //call this function inside render(
//     //to let react-dnd handle the drag events
//     connectDropTarget: connect.dropTarget(),
//     itemType: monitor.getItemType()
//   }
// }

class Workflow extends Component {
  constructor(props) {
		super(props);
		this.state = { workflow: props.workflow };
	}

	pushWorkflowAction(workflowAction) {
		this.setState(update(this.state, {
			workflow: {
				$push: [ workflowAction ]
			}
		}));
	}

	removeWorkflowAction(index) {
		this.setState(update(this.state, {
			workflow: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}

	moveWorkflowAction(dragIndex, hoverIndex) {
		const { workflow } = this.state;
		const dragWorkflowAction = workflow[dragIndex];

		this.setState(update(this.state, {
			workflow: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragWorkflowAction]
				]
			}
		}));
	}

  render() {
    const { workflow } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;

		// const backgroundColor = isActive ? 'lightgreen' : '#FFF';

		return connectDropTarget(
			<div id='workflow'>
				{workflow.map((action, i) => {
					return (
						<WorkflowAction
							key={action.id}
							index={i}
							listId={this.props.id}
							actionName={action.action}
							removeWorkflowAction={this.removeWorkflowAction.bind(this)}
							moveWorkflowAction={this.moveWorkflowAction.bind(this)} />
					);
				})}
			</div>
		);
  }

}

export default DropTarget(Types.WORKFLOW, workflowTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Workflow);
