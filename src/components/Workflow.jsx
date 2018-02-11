import React, {Component} from 'react';
import {DropTarget} from 'react-dnd'
import update from 'react-addons-update'

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
  constructor(props) {
		super(props);
		this.state = { cards: props.list };
	}

	pushCard(card) {
		this.setState(update(this.state, {
			cards: {
				$push: [ card ]
			}
		}));
	}

	removeCard(index) {
		this.setState(update(this.state, {
			cards: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}

	moveCard(dragIndex, hoverIndex) {
		const { cards } = this.state;
		const dragCard = cards[dragIndex];

		this.setState(update(this.state, {
			cards: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard]
				]
			}
		}));
	}

  render() {
    


    return (
      <div id="workflow">
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget(Types.WORKFLOW, workflowTarget, collect)(Workflow);
