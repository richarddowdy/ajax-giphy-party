$(function(){

  $("form").on("submit", async function(e){
    e.preventDefault();
    
    let searchItem = $("#searchItem").val();
    $("#searchItem").val(""); // added empty string to make search field blank again - SMT
  
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

  }

  $("#removeBtn").on("click", function(e){
    $("container").empty();
  });
  
  console.log("Let's get this party started!");
})

// let $soloGif = $("<img>", { src: randGif }); //another way to create element and set attr
// let $soloGif = $(`<img src=${randURL}>`);
