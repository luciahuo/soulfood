import React from 'react';
import * as u from './utils';
import * as actions from '../actions'

export default class AddEventForm extends React.Component {
  constructor (props) {
    super();
    this.state = {error: false};
    this.submitForm = this.submitForm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  // when an event is submitted
  submitForm() {
    // get the appropriate values
    var title = $('#title').val();
    var time = $('#time').val();
    var color = $('#color').val();
    if (!title) {
      alert("title is required");
    } else {
      var event = {
        title: title,
        time: time,
        color: color
      }
      // submit the form
      this.props.store.dispatch(actions.submitForm(event));
      // close the form
      this.props.store.dispatch(actions.closeForm());
    }
  }

  // cancel form
  cancel() {
    this.props.store.dispatch(actions.closeForm());
  }

  // make a change to a form
  changeForm() {
    this.props.store.dispatch(actions.changeForm());
  }

  render() {
    return (
      <div className="add-event-overlay">
        <form className="add_event-form"
          onSubmit={this.submitForm}
          onChange={this.changeForm}
          >
          <p className="form-title">
            {this.props.date.format('ddd D MMM YYYY')}
          </p>
          <label>
            Title
            <input type="text" id="title"/>
          </label>
          <label>
            Time
            <select id="time">
              <option value="7:00 AM - 8:00 AM">7:00 AM - 8:00 AM</option>
              <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
            </select>
          </label>
          <label>
            Colour
            <select id="color">
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Brown">Brown</option>
              <option value="Purple">Purple</option>
            </select>
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
