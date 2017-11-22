// sets the date to scroll to
const changeDate = (date) => {
  return {
    type: 'CHANGEDATE',
    date: date
  }
}

// sets the day to add to
const selectDay = (date) => {
  return {
    type: 'SELECTDAY',
    date: date
  }
}

const addEvent = (eventInfo) => {
  return {
    type: 'ADDEVENT',
    info: eventInfo
  };
};

const removeEvent = (eventName) => {
  return {
    type: 'REMOVEEVENT',
    name: eventName
  }
}

const cancelForm = () => {
  return {
    type: 'CANCELFORM'
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

export { changeDate, selectDay, addEvent, removeEvent, cancelForm, changeForm, addRestaurant, addRecipe };
