// sets the date to be added to
const setDate = (date) => {
  return {
    type: 'SETDATE',
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

export { addEvent, removeEvent, cancelForm, changeForm, addRestaurant, addRecipe };
