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

// action that allows users to edit events
const changeForm = (eventName) => {
  return {
    type: 'CHANGEFORM'
  }
}

const addRestaurant = (restaurantId) => {
  return {
    type: 'ADDRESTAURANT',
    id: restaurantId
  }
}

const addRecipe = (recipeId) => {
  return {
    type: 'ADDRECIPE',
    id: recipeId
  }
}

export { changeDate, selectDay, addEvent, removeEvent, closeForm, changeForm, addRestaurant, addRecipe };
