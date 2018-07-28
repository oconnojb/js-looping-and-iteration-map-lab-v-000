// Code your solution in this file.
function lowerCaseDrivers(col) {
  const newCol = col.map(function (dr) {
    return dr.toLowerCase();
  })
  return newCol;
}

function nameToAttributes(col) {
  const newCol = col.map(function (dr) {
    let drArr = dr.split(' ');
    return {firstName: drArr[0], lastName: drArr[1]}
  })
  return newCol


  // var newCol = []
  // newCol = col.map(function (dr) {
  //   var drArr = dr.split(' ')
  //   var newObj = {firstName: drArr[0], lastName: drArr[1]};
  //   newCol.push(newObj);
  // })
  //
  // return newCol;
}
