import React, { Fragment, useEffect, useState } from "react";
import StyledList from "./style";
import EditProfessional from '../Edit/EditProfessionals';

export default function ListProfessionals () {
    const [ professional, setProfessional ] = useState([])

    const [searchValue, setSearchValue] = useState('');// constantante cidade, definirCidade = usar estado vazio
    console.log(searchValue)
    const searchProfessional = professional.filter((professional) => professional.professional_name.includes(searchValue) || professional.professional_phone.includes(searchValue))       

    const deleteProfessional = async (professional_id) => {
        try {
          const deleteProfessional = await fetch(`http://localhost:8081/professionals/${professional_id}`, {
            method: 'DELETE',
          });
    
          setProfessional(professional.filter((professional) => professional.professional_id !== professional_id));
        } catch (error) {
          console.log(error);
        }
      };

    const getProfessional = async () => {
        try {
            const response = await fetch('http://localhost:8081/professionals/')
            const jsonData = await response.json()
            
            setProfessional(jsonData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfessional()
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
                                {professional.length} Professionais cadastrados
                            </div>

                            <div className="cards">
                            {
                                searchProfessional.map((professional) => (
                                    <div className="cards-single" key={professional.professional_id}>
                                    <div className="actions">
                                        <EditProfessional professional={professional} />
                                        <button className="btn delete" onClick={() => deleteProfessional(professional.professional_id)}>
                                        <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                    <div className="single__header">
                                        <img className="photo" src={professional.professional_photo} alt="" />
                                        <p className="name">{professional.professional_name}</p>
                                    </div>
                                    <div className="single__body">
                                        {professional.professional_phone ? ( // Verifica se o número de contato existe
                                        <div className="body__contact">
                                            <div className="single__body__icon">
                                            <i class="fa-solid fa-mobile-screen-button" style={{ color: "#000000;" }}></i>
                                            </div>
                                            <span>{formatPhoneNumber(professional.professional_phone)}</span>
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

// export default ListProfessionals;