// Write your solution in this file!
function updateDriverWIthKeyAndValue(object, key, value){
  let newObj = { ...object}
  newobject[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromDriverByKey(object, key){
  let newObj =
}