import React, { Fragment, useEffect, useState } from "react";
import StyledList from "./style";
import EditClient from '../Edit/EditClients';

export default function ListClients () {
    const [ clients, setClients ] = useState([])

    const [searchValue, setSearchValue] = useState('');// constantante cidade, definirCidade = usar estado vazio
    console.log(searchValue)
    const searchClient = clients.filter((client) => client.client_name.includes(searchValue) || client.client_phone.includes(searchValue))       

    const deleteClient = async (client_id) => {
        try {
          const deleteClient = await fetch(`http://localhost:8081/clients/${client_id}`, {
            method: 'DELETE',
          });
    
          setClients(clients.filter((client) => client.client_id !== client_id));
        } catch (error) {
          console.log(error);
        }
      };

    const getClients = async () => {
        try {
            const response = await fetch('http://localhost:8081/clients/')
            const jsonData = await response.json()
            
            setClients(jsonData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClients()
    }, [])

    function formatPhoneNumber(phoneNumber) {
        if (phoneNumber && phoneNumber.length === 11) {
          return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`;
        }
        return phoneNumber;
      }



    return (
        <>
            <StyledList>

                <div className="list">
                        <div className="Search">
                            <form>
                                <div className="search-icon">
                                    <i class="fa-solid fa-magnifying-glass" style={{color:"#000000;",}}></i>
                                </div>
                                <input type="search"
                                    value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                                    name="detectSearch" placeholder="Pesquisar por nome ou celular"></input>
                            </form>
                        </div>
                        <div className="center">
                            <div className="data-number">
                                {clients.length} Clientes cadastrados
                            </div>

                            <div className="cards">
                            {
                                searchClient.map((client) => (
                                    <div className="cards-single" key={client.client_id}>
                                    <div className="actions">
                                        <EditClient client={client} />
                                        <button className="btn delete" onClick={() => deleteClient(client.client_id)}>
                                        <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                    <div className="single__header">
                                        <img className="photo" src={client.client_photo} alt="" />
                                        <p className="name">{client.client_name}</p>
                                    </div>
                                    <div className="single__body">
                                        {client.client_phone ? ( // Verifica se o número de contato existe
                                        <div className="body__contact">
                                            <div className="single__body__icon">
                                            <i class="fa-solid fa-mobile-screen-button" style={{ color: "#000000;" }}></i>
                                            </div>
                                            <span>{formatPhoneNumber(client.client_phone)}</span>
                                        </div>
                                        ) : null}
                                    </div>
                                    </div>
                                ))
                                }
                                
                            </div>
                            
                        </div>
                            
                </div>
            </StyledList>
            
        </>
    )
}

// export default ListClients;