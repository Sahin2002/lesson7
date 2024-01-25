// switch
const day0fWeek = "mon";
switch (day0fWeek) {
  case "mon":
    console.log(" Monday ");
    break;
  case "tue":
    console.log("Tuesday");
    break;
  case "wed":
    console.log("Wednesday");
    break;
  case "thu":
    console.log("Thursday");
    break;
  case "fri":
    console.log(" Friday");
    break;
  case "sat":
    console.log("Saturday");
    break;
  case "sun":
    console.log("Sunday");
    break;
  default:
    console.log('not day');  
}
// for
const numbers=[23,45,66,12]
let total=0
for(let i=0;i<numbers.length;i++){
  total=total+numbers[i]
  
}
console.log('total:',total);
//for-2
const fruits=['Apple','Banana','Cherry']
for(let x=0;x<fruits.length;x++){
   console.log(fruits[x],'length:',fruits[x].length);
}
// if else
const student={
  name:'bill gates',
  grad:80
}
const {name,grad}=student
if(grad >= 60){
  console.log(name,':pass');
}else{
  console.log(name,':fail');
}