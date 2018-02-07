import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import WorkflowContainer from './WorkflowContainer.jsx'
import ActionsList from './ActionsList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'actions':  [
            'Import',
            'Export',
            'Sort',
            'Extract',
            'Split'
          ],
      'workflow': {
            '_id': 'bU4rMI7fEeeqxlvy4NOyyA==',
            'ProjectId': 'bOd74o7fEeeqxlvy4NOyyA==',
            'AcctId': 'GVb1w0skuUKO+FfzgvG+JA==',
            'Stages': [
              {
                'id': 1,
                'action': 'Import',
                'isStart': true,
                'prevStage': null,
                'nextStage': 2,
              },
              {
                'id': 2,
                'action': 'Sort',
                'isStart': false,
                'prevStage': 1,
                'nextStage': 3,
              },
              {
                'id': 3,
                'action': 'Extract',
                'isStart': false,
                'prevStage': 2,
                'nextStage': null,
              },
              {
                'id': 4,
                'action': 'Export',
                'isStart': false,
                'prevStage': null,
                'nextStage': null,
              }
            ]
          }
        }
  }

  render() {
    return (
      <div id='sort-spoke'>
        <nav>
          <a href="/">Admin</a>
          <button>Setup Workflow</button>
        </nav>
        <main>
          <WorkflowContainer workflow={this.state.workflow}/>
          <ActionsList actions={this.state.actions}/>
        </main>
        <div id='controller-container'>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(App);
