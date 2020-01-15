$(function(){

  $("#searchForm").on("submit", async function(e){
    e.preventDefault();
    
    let searchItem = $("#searchItem").val();
  
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: 
      {
        q: searchItem, 
        api_key: "ZFwUmtWDV46D4e8VPwzCHQlkGRCaHJ5a"
      }
    });  
    randomGif(response.data);
  });
  
  function randomGif(input){
    let randomInt = Math.floor(Math.random()* input.data.length);
    let randURL = input.data[randomInt].images.downsized_large.url;
    
    let $soloGif = $("<img>");
    $("container").append($soloGif.attr("src", randURL));
    return randURL;
  }

  $("#removeBtn").on("click", function(){
    $("container").empty();
  });
  
  console.log("Let's get this party started!");
})

// let $soloGif = $("<img>", { src: randGif }); //another way to create element and set attr
