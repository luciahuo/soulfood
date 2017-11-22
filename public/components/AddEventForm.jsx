import React from 'react';
import u from './utils';

export default class AddEventForm extends React.Component {
  constructor (props) {
    super();
  }

  // when an event is submitted
  submitForm() {
    var event = {
    }
  }

  // cancel form
  cancel() {

  }

  // make a change to a form
  changedForm() {

  }

  render() {
    return (
      <div className="add-event-overlay">
        <form className="add_event-form"
          onSubmit={this.formSubmit}
          onChange={this.formChanged}
          >
          <p className="form-title">
            {this.props.date.format('ddd D MMM YYYY')}
          </p>
          <label>
            Title
            <input type="text" ref="title"/>
          </label>
          <div className="form-controls">
            <button type="submit">Add Event</button>
            <button onClick={this.cancel}>Cancel</button>
            {this.state.error &&
              <p className="error">{this.state.error}</p>}
          </div>
        </form>
      </div>
    );
  }
}

// proptype checker
AddEventForm.propTypes = {
  date: u.propTypeMoment
}

module.exports = AddEventForm;
