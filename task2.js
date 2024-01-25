// switch
const color = "red";
switch (color) {
  case "red":
    console.log("red");
    break;
  case "green":
    console.log("stop green");
    break;
  case 'blue':
    console.log('go blue');
    break
  case 'yellow':
    console.log('yellow');
    break
  default:
    console.log('not color');       
}
// for loop
const matrix=[[1,2,4554,343,22],[3,4,677,887]]
for(let i=0;i<matrix.length;i++){
   for(let y=0;y<matrix[i].length;y++){
     console.log(matrix[i][y]);
   }
}
// object
const product={
  name:'Sahin',
  price:3000,
  isStock:true
}
const {price,isStock}=product
for (let x in product) {
  console.log(product[x]);
}
if(price > 50 && isStock === true){
    console.log('Available');
}else{
  console.log('Unavailable');
}