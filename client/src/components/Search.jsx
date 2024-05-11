import { useState } from 'react';
// import {ListClients} from './List';

function Search() {/// função Buscar(propriedades)

    const [searchValue, setSearchValue] = useState('');// constantante cidade, definirCidade = usar estado vazio
    // const clients = ListClients.filter((client) => client.client_name.includes(searchValue))

    console.log(searchValue)
    function detectSearch(e){// funcao detectar busca (evento)
        // e.preventDefault();
        // setCity('');

        let currentValue = document.querySelector('input[name=detectSearch').value;// valorAtual = campo input com nome detectarBusca
        
        // alert(currentValue);
    }
  return (
    <div className="Search">
        <form>
            <div className="search-icon">
                <i class="fa-solid fa-magnifying-glass" style={{color:"#000000;",}}></i>
            </div>
            <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} name="detectSearch" placeholder="Pesquisar por nome ou celular"></input>
        </form>
    </div>
  );
}

export default Search;