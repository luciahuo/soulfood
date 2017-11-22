import moment from 'moment';

const propTypeMoment = (props, propName) => {
  if (!moment.isMoment(props[propName])) {
    return new Error(
      'Expected' + propName +
      'to be moment'
    );
  }
}

export { propTypeMoment }
