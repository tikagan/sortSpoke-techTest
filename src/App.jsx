import React, {Component} from 'react';
import Workflow from './Workflow.jsx'
import ActionsList from './ActionsList.jsx'

class App extends Component {
  constructor(props) {
    //pass the props to the react.component (the parent class of this component)
    super(props);
    //set up the default state for the application
    this.state = {
      'Actions':  [
            'Import',
            'Export',
            'Sort',
            'Extract',
            'Split'
          ],
      'Workflow': {
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
          <Workflow />
          <ActionsList />
        </main>
        <div id='controller-container'>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}
export default App;
