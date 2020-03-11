// Write your solution in this file!
function updateDriverWIthKeyAndValue(object, key, value){
  const newObj = { ...object}
  newobject[key] = value;
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}