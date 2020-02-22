// var statesData = d3.json("states_images.json").then(function(data) {
//   // console.log(data[0].state);
// });
// console.log(statesData)
// console.log(statesData[0])
// function consolelogtest(jsondata){
//   console.log(jsondata);
// };
// d3.json('states_images.json', consolelogtest);
// function returnAString(AnArray){
//   return AnArray.toString()
// }
// console.log(returnAString(["test string"]))
// function stateImageUrl(state){
//   var imgUrl=[];
//   // var testx;
//   var statesData = d3.json("states_images.json").then(function(data){
//     // var imgUrl = [];
//     data.forEach(x=> {
//     // for (var i = 0; i < data.length; i++){
//       // var testx = data[i].image
//     // console.log(x.image)
//     // console.log(state)
//     if (x.state === state){
//       // console.log(x)
//       // var testx = data[i].image
//       imgUrl.push(x.image)
//       // return testx;
//       // console.log(imgUrl)
//     }
//     // return testx
//     })
//     return imgUrl;
//   });
//   // var imgUrl2 = imgUrl.toString()
// }
// console.log(stateImageUrl("Alabama"))
// stateImageUrl("Alabama")
// var test = stateImageUrl("Alabama")
// console.log(test)


function returnAString(AnArray){
  return AnArray.toString()
}
console.log(returnAString(["test string"]))
function stateImageUrl(state){
  var imgUrl = [];

  d3.json("states_images.json").then(function(data){
  
    data.forEach(x=> {

      if (x.state === state){

        imgUrl.push(x.image)
        
      }
      
    })
    
  });
  return imgUrl;
}
// console.log(returnAString(stateImageUrl("Alabama")))
function checkstate(array,  state){
  return (array.state === state) ? true 
}
var test = stateImageUrl("Alabama")
console.log(test)

function filterData(promise){
  promise.filter(checkstate(promise, "Alabama"))
}