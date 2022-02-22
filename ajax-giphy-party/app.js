console.log("Let's get this party started!");
const $gifArea = $('#giphyDisplay');
const $searchInput = $('#search');

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let $newCol = $("<div>", { class: "gifs" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGif);
      $gifArea.append($newCol);
    }
  }

$("form").on('submit', async function(evt){
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");
    
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", 
    {params: {
        q:searchTerm,
        api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
    });
    addGif(response.data);
});

$('#rmbtn').on('click', function(){
    $gifArea.empty();
})