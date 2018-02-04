import React, {Component} from 'react';
import Action from './Action.jsx'

class ActionsList extends Component {

  toRender = (actions) => {
    return actions.map((action) => {
      <Action actionName={action}></Action>
    }
  }

  render(actions) {


    return (
      <div id="actions-list">
        {this.toRender()}
      </div>
    );
  }
}
export default ActionsList;
