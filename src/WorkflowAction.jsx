import React, {Component} from 'react';

class WorkflowAction extends Component {


  render() {
    console.log("in action")
    return (
      <div className="workflow-action">
        <h3>{this.props.actionName}</h3>
      </div>
    );
  }
}
export default WorkflowAction;
