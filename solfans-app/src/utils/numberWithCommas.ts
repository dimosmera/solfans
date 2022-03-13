/**
 * It will return the number with thousands separators
 * From here: https://stackoverflow.com/a/2901298
 */
const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default numberWithCommas;
