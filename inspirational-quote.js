
fetch("./quotes.json")
.then(function(resp) {
  return resp.json();
})
.then(function(data) {
  let index = 0;
  let now = new Date();
  let day = now.getDay();
  console.log(day)
  if (day === day + 1) {
    console.log(day+1)
    console.log(data.quotes[index].quote)
  index = Math.round(Math.random());
  }
  let quote = `"` + data.quotes[index].quote + `"`;
  let author = "- " + data.quotes[index].author;
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
});