
$(".searchForm").on("submit", async function(e){
  e.preventDefault();
  
  let searchItem = $("#searchItem").val();

  let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: {q:searchItem, api_key:"ZFwUmtWDV46D4e8VPwzCHQlkGRCaHJ5a"}});
  console.log(response.data);

  randomGif(response.data);

  
})

function randomGif(input){
  let randomInt = Math.floor(Math.random()*input.length);
  let randGif = reponse.data[randomInt];
  return randGif;
}




console.log("Let's get this party started!");