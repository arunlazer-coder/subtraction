
export default class Validation {

static vaildNnumber = (number) => {
  if (/^[0-9]+$/.test(number)) {
    return true;
  }
  return false;
}

}