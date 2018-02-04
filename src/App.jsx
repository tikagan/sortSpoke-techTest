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
          ]

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
