function calculateScore(){
  console.log('>>>>>>>>')
  let pointsGiven = document.getElementById("pointsGiven")
  let totalPoints = document.getElementById("totalPoints")
  let totalGrade
  totalGrade = (pointsGiven.value/totalPoints.value)*100;
  console.log(pointsGiven.value)
  return totalGrade.toFixed(2);
}
 displayScore=(e)=>{
  console.log("eeeeeeee")
  totalGradeDiv = document.getElementById("totalGrade");
  totalGrade.innerHTML =`
   ${calculateScore()}
  `
}