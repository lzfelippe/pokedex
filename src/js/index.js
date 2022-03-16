/*
quando clicar no pokémon da listagem temos que escondeer o cartao do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartao do pokémon

precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémons

- remover a classe aberto só do cartao que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
- remover a classe ativo que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
//para cada = forEach
listaSelecaoPokemons.forEach(pokemon => {
    // precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
    
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartao que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')

    })
})





 





