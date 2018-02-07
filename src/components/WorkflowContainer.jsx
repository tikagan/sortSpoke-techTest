import React, {Component} from 'react';
import WorkflowAction from './WorkflowAction.jsx'
import Workflow from './Workflow.jsx'

class WorkflowContainer extends Component {

  toRender = function () {
    const act = this.props.workflow['Stages'].map((action) =>
      <WorkflowAction key={action['id']} actionName={action['action']} isStart={action['isStart']} prevStage={action['prevStage']} nextStage={action['nextStage']}> </WorkflowAction>
    )
    return (
      <Workflow>{act}</Workflow>
    )
  }

  render() {
    return (
      <div id="workflow-container">
        {this.toRender()}
      </div>
    );
  }
}
export default WorkflowContainer;
