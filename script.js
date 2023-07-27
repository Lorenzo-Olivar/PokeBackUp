// code for the search text area using the poke api to autocomplete poke names

var requestPokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

fetch(requestPokeUrl)
.then(function(response){
  return response.json();
})
    
.then(function(data){
  
  // js for the jquery autocomplete
  $(function() { 
    
    var nameTags = [];
    
    for (let i = 0; i < data.results.length; i++) {
      const iDataResults = data.results[i];
      
      nameTags.push(iDataResults.name);
      
      // console.log(iDataResults.name)
    }

    $( "#nameList" ).autocomplete({
      source: nameTags
    });
  });
});


// code for 


// Testing Area

// var dogs = [];
// dogs.push('Kylo Bollens')
// console.log(dogs)