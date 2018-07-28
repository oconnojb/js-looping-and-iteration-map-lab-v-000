// Code your solution in this file.
function lowerCaseDrivers(col) {
  const newCol = col.map(function (dr) {
    return dr.toLowerCase();
  })
  return newCol;
}

function nameToAttributes(col) {
  return col.map(function (dr) {
    let drArr = dr.split(' ');
    return {firstName: drArr[0], lastName: drArr[1]}
  })
  //return newCol;
}

function attributesToPhrase(col) {

}
