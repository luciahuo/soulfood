import moment from 'moment';

// helper for verifying prop type of moment
const propTypeMoment = (props, propName) => {
  if (!moment.isMoment(props[propName])) {
    return new Error(
      'Expected' + propName +
      'to be moment'
    );
  }
}

// helper for chunking an array
const chunk = (size, arr) => {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export { propTypeMoment, chunk}
