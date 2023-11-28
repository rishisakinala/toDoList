// instead of using module.exports , we can use exports
module.exports.getDate=function (){
const options ={
  weekday: "long",
  day: "numeric",
  month: "long"
};

const d = new Date();
return d.toLocaleDateString("en-IN",options);

}

//example function

exports.getDay=function(){
  const options ={
    weekday: "long",
  };

  const d = new Date();
  return d.toLocaleDateString("en-IN",options);
}
