// sets the date to scroll to
const changeDate = (date, store) => {
  return {
    type: 'CHANGEDATE',
    date: date,
    store: store
  }
}

// sets the day to add to
const selectDay = (date) => {
  return {
    type: 'SELECTDAY',
    date: date
  }
}

const addEvent = (date, eventInfo, store) => {
  return {
    type: 'ADDEVENT',
    date: date,
    info: eventInfo,
    store: store
  };
};

const addEventForm = (date) => {
  return {
    type: 'ADDEVENTFORM',
    date: date
  }
}

const removeEvent = (eventName) => {
  return {
    type: 'REMOVEEVENT',
    name: eventName
  }
}

const closeForm = () => {
  return {
    type: 'CLOSEFORM'
  }
}

const searchRestaurants = (date) => {
  return {
    date: date,
    type: 'SEARCHRESTAURANTS'
  }
}

const searchRecipes = (date) => {
  return {
    date: date,
    type: 'SEARCHRECIPES'
  }
}

export { addEventForm, changeDate, selectDay, addEvent, removeEvent, closeForm, searchRestaurants, searchRecipes};
