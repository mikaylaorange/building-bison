  function getDate() {
  let todaysDate = "";
  let today = new Date();
  let day = today.getDate();
  let monthIndex = today.getMonth();
  let fullYear = today.getFullYear();
  let nthDay = "";
  let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  if (day > 3 && day < 21) nthDay =  'th';
    else if (day % 10 ===1 )  nthDay  = "st";
    else if (day % 10 === 2 )  nthDay  = "nd";   
    else if (day % 10 === 3)  nthDay  = "rd";  
    else nthDay = "th";

  let month = monthArray[monthIndex];

  todaysDate = (month + " " + (day.toString()+nthDay) + ", " + fullYear.toString());
  return todaysDate;
}
  document.getElementById("date").innerHTML = getDate();