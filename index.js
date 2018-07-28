// Code your solution in this file.
function lowerCaseDrivers(col) {
  const newCol = col.map(function (dr) {
    return dr.toLowerCase();
  })
  return newCol;
}
