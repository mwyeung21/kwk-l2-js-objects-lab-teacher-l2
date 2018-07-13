// Write your solution in this file!
const driver = {driver:"driver"} //make an driver object
// colon makes this an object -> name:value pairs

function updateDriverWithKeyAndValue(driver, key, value)
{
  const newPair = {} //create new object to store new values in
  newPair[key] = value
  //driver[key]= value?? why does this not work
  //const newPair = {key: value};
  temp = Object.assign({}, driver, newPair) //clone of driver object so that i dont overwrite
  return temp
}

function destructivelyUpdateDriverWithKeyAndValue( driver, key, value)
{
   driver[key]=value
   return driver // need this return statement to pass back original modified object
   
}

function deleteFromDriverByKey(driver, key, value)
{ 
  console.log(typeof(key))
  delete driver.driver
  console.log(driver)
  const newObj = Object.assign({}, driver);
  console.log(newObj)
  delete newObj.key;
  return driver
}
deleteFromDriverByKey({driver:"Sam"}, driver, "163 Berks")
/*const obj = { foo: 'bar' };

const newObj = Object.assign({}, obj);

newObj;
// => { foo: "bar" }

delete newObj.foo;
// => true

newObj;
// => {}

obj;
// => { foo: "bar" }*/

function destructivelyDeleteFromDriverByKey(driver, key, value)
{
  console.log(key)
  delete driver.key;
  return driver
}






