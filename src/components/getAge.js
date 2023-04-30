// let dayjs;
//  dayjs = require('dayjs');
// dayjs().format();

import dayjs from 'dayjs';

export default (date) => {
  if (date != null) {
    let birthday = new Date(date.split('/')[2], date.split('/')[0], date.split('/')[1]);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  } else
      return -1;

}
