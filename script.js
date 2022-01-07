function selecionarPokemon(){
    var pkmSelecionado = document.getElementById("pokemons").value;
    var imgPkm = document.getElementById("imgPkm");
      
    if(pkmSelecionado == "Pikachu"){
      imgPkm.src = "https://static.pokemonpets.com/images/monsters-images-800-800/25-Pikachu.png";        } else if(pkmSelecionado == "Charmander"){
      imgPkm.src = "https://static.pokemonpets.com/images/monsters-images-800-800/4-Charmander.png";
    } else if(pkmSelecionado == "Squirtle"){
      imgPkm.src = "https://static.pokemonpets.com/images/monsters-images-800-800/7-Squirtle.png";
    } else if(pkmSelecionado == "Bulbasaur"){
      imgPkm.src = "https://static.pokemonpets.com/images/monsters-images-800-800/1-Bulbasaur.png";
    } else if(pkmSelecionado == "Rattata"){
      imgPkm.src = "https://static.pokemonpets.com/images/monsters-images-300-300/2019-Shiny-Rattata.png";
    } else if(pkmSelecionado == "Jigglypuff"){
      imgPkm.src = "https://static.pokemonpets.com/images/monsters-images-300-300/39-Jigglypuff.png";
    } else{
      imgPkm.src = "";      
    }
}

 function mudaSelecao(nomePkm){
      var selectElement = document.getElementById("pokemons");
      
      var selectOptions = selectElement.options;
      
      for (var opt, i = 0; opt = selectOptions[i]; i++) {        
          if (opt.value == nomePkm) {            
              selectElement.selectedIndex = i;
              break;
          }
      }
 }