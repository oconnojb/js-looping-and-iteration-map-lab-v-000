// Code your solution in this file.
function lowerCaseDrivers(col) {
  return col.map(function (dr) {
    return dr.toLowerCase();
  })
}

function nameToAttributes(col) {
  return col.map(function (dr) {
    let drArr = dr.split(' ');
    return {firstName: drArr[0], lastName: drArr[1]}
  })
}

function attributesToPhrase(col) {

}
