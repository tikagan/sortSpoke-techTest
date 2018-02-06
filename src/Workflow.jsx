import React, {Component} from 'react';
import WorkflowAction from './WorkflowAction.jsx'

class Workflow extends Component {

  toRender = function () {
    const act = this.props.workflow['Stages'].map((action) =>
      <WorkflowAction key={action['id']} actionName={action['action']} isStart={action['isStart']} prevStage={action['prevStage']} nextStage={action['nextStage']}> </WorkflowAction>
    )
    return (
      <div id="workflow">{act}</div>
    )
  }

  render() {
    console.log('in Workflow')
    return (
      <div id="workflow-container">
        {this.toRender()}
      </div>
    );
  }
}
export default Workflow;
