import React, { Fragment, useState } from 'react';
import StyledInsert from './style';

const AddClient = () => {
    const [client_photo, setClient_photo] = useState('')
    const [client_name, setClient_name] = useState('')
    const [client_phone, setClient_phone] = useState('')
    const [client_email, setClient_email] = useState('')
    const [client_birthDay, setClient_birthDay] = useState('')
    const [client_birthMonth, setClient_birthMonth] = useState('')
    const [client_obs, setClient_obs] = useState('')

    const handleImageUpload = (e) => {
        e.preventDefault(); // Evita a submissão acidental do formulário
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageData = event.target.result;
                setClient_photo(imageData);
            };
            reader.readAsDataURL(file);
        }
    };
    
    
    const Send = async e => {
        e.preventDefault()
        try {
            const data = {
                client_photo,
                client_name,
                client_phone,
                client_email,
                client_birthDay,
                client_birthMonth,
                client_obs
            }
            const res = await fetch('http://localhost:8081/clients', {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
            })
            window.location = '/clientes'
        } catch (error) {
            console.log(error)
        }
    }
    


    return (
        <>
            <StyledInsert>
            {/* Button trigger modal  */}
            <button className="add" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="fa-solid fa-plus" style={{color: "#ffffff;",}}></i>
                    </button>
            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button aria-label="Close" class="close btn" data-bs-dismiss="modal" type="button">
                                            <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                                        </button>
                                        <h5 class="modal-title" id="exampleModalLabel">Adicionar Cliente</h5>
                                        <button aria-label="Close" id="close-x" class="close btn" data-bs-dismiss="modal" type="button">
                                            <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                                        </button>
                                    </div>
                                    <div class="modal-body scroll form-modal" id="modalAdd">
                                        <div class="portlet light">
                                            <form class="form ng-pristine ng-invalid ng-touched" padding="" onSubmit={Send}>
                                                <div class="portlet-body form">
                                                    <div class="form-body">
                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <div class="form-group">
                                                                <div class="form-add-picture">
                                                                    <input                            
                                                                        autocomplete="doNotAutoComplete"
                                                                        type="file"
                                                                        id="AddUserChangePhoto"
                                                                        style={{ display: "block" }}
                                                                        onChange={handleImageUpload}
                                                                    />
                                                                    <div>
                                                                        <div className="bordered-pic">
                                                                            <img src={client_photo} alt=''/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="edit-pic-top-icon"
                                                                        onClick={() => document.getElementById("AddUserChangePhoto").click()}
                                                                        >
                                                                        <i className="fa-regular fa-pen-to-square" style={{ color: "#ffffff" }}></i>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5" style={{paddingLeft: "27.2px;"}}>
                                                                <div class="form-group m-form__group">
                                                                    <label for="exampleInputEmail1">Nome</label>
                                                                    <div class="input-group m-input-group">
                                                                        <input 
                                                                            aria-describedby="basic-addon1" 
                                                                            autocomplete="doNotAutoComplete" 
                                                                            class="form-control m-input ng-pristine ng-invalid input-invalid ng-touched" 
                                                                            id="client_name" 
                                                                            no-init-space="" 
                                                                            type="text"
                                                                            value={client_name}
                                                                            onChange={e => setClient_name(e.target.value)} 
                                                                        />
                                                                    </div>
                                                                    {/* <div class="input-error" no-lines="" text-wrap="">
                                                                        <p>Required field</p>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group m-form__group">
                                                                    <label for="exampleInputEmail1">E-mail</label>
                                                                    <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                                        <input 
                                                                            aria-describedby="basic-addon1" 
                                                                            autocomplete="doNotAutoComplete" 
                                                                            class="form-control m-input ng-untouched ng-pristine ng-valid" 
                                                                            type="text"
                                                                            value={client_email}
                                                                            onChange={e => setClient_email(e.target.value)} 
                                                                        />
                                                                        <span class="m-input-icon__icon m-input-icon__icon--left">
                                                                            <span>
                                                                                
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group m-form__group">
                                                                    <label for="exampleInputEmail1">Telefone</label>
                                                                    <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                                        <input 
                                                                            aria-describedby="basic-addon1" 
                                                                            autocomplete="doNotAutoComplete" 
                                                                            class="form-control m-input ng-untouched ng-pristine ng-valid" 
                                                                            name="phone" 
                                                                            phone-mask=""
                                                                            type="tel" 
                                                                            maxlength="18"
                                                                            value={client_phone}
                                                                            onChange={e => setClient_phone(e.target.value)} 
                                                                        />
                                                                        <span class="m-input-icon__icon m-input-icon__icon--left">
                                                                            <span>
                                                                                
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group" style={{marginBottom: "0px;",}}>
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <div className='birth'>
                                                                                <label for="exampleInputEmail1">Aniversário</label>
                                                                            </div>
                                                                            <div className='birth-value'>
                                                                                <div className='birth-value__day'>

                                                                                    <label for="exampleInputEmail1">(dia)</label>
                                                                                    <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                                                    <select class="custom-select form-control m-input ng-untouched ng-pristine ng-valid" id="dia_niver" integer="" maxlength="2" name="dia_niver"
                                                                                        value={client_birthDay}
                                                                                        onChange={e => setClient_birthDay(e.target.value)}  
                                                                                        zero="false">
                                                                                        <option value="1"> 1 </option>
                                                                                        <option value="2"> 2 </option>
                                                                                        <option value="3"> 3 </option>
                                                                                        <option value="4"> 4 </option>
                                                                                        <option value="5"> 5 </option>
                                                                                        <option value="6"> 6 </option>
                                                                                        <option value="7"> 7 </option>
                                                                                        <option value="8"> 8 </option>
                                                                                        <option value="9"> 9 </option>
                                                                                        <option value="10"> 10 </option>
                                                                                        <option value="11"> 11 </option>
                                                                                        <option value="12"> 12 </option>
                                                                                        <option value="13"> 13 </option>
                                                                                        <option value="14"> 14 </option>
                                                                                        <option value="15"> 15 </option>
                                                                                        <option value="16"> 16 </option>
                                                                                        <option value="17"> 17 </option>
                                                                                        <option value="18"> 18 </option>
                                                                                        <option value="19"> 19 </option>
                                                                                        <option value="20"> 20 </option>
                                                                                        <option value="21"> 21 </option>
                                                                                        <option value="22"> 22 </option>
                                                                                        <option value="23"> 23 </option>
                                                                                        <option value="24"> 24 </option>
                                                                                        <option value="25"> 25 </option>
                                                                                        <option value="26"> 26 </option>
                                                                                        <option value="27"> 27 </option>
                                                                                        <option value="28"> 28 </option>
                                                                                        <option value="29"> 29 </option>
                                                                                        <option value="30"> 30 </option>
                                                                                        <option value="31"> 31 </option>
                                                                                    </select>
                                                                            
                                                                                    </div>      
                                                                                </div>
                                                                                <div className='birth-value__month'>

                                                                                    <label for="exampleInputEmail1">(Mês)</label>
                                                                                    <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                                                        <select autocomplete="on" class="custom-select form-control m-input ng-untouched ng-pristine ng-valid" id="mes_niver" integer="" maxlength="2" name="mes_niver" 
                                                                                            value={client_birthMonth}
                                                                                            onChange={e => setClient_birthMonth(e.target.value)} 
                                                                                            zero="false">
                                                                                            <option value="Janeiro"> Janeiro</option>
                                                                                            <option value="Fevereiro"> Fevereiro</option>
                                                                                            <option value="Março"> Março</option>
                                                                                            <option value="Abril"> Abril</option>
                                                                                            <option value="Maio"> Maio</option>
                                                                                            <option value="Junho"> Junho</option>
                                                                                            <option value="Julho"> Julho</option>
                                                                                            <option value="Agosto"> Agosto</option>
                                                                                            <option value="Setembro"> Setembro</option>
                                                                                            <option value="Outubro"> Outubro</option>
                                                                                            <option value="Novembro"> Novembro</option>
                                                                                            <option value="Dezembro"> Dezembro</option>
                                                                                        </select>
                                                                                        <span class="m-input-icon__icon m-input-icon__icon--left">
                                                                                            <span>
                                                                                                <svg-icon class="svg-icon-black" src="./assets/svg/icons/calendar-line.svg">
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                                                        <g>
                                                                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                                                                            <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"></path>
                                                                                                        </g>
                                                                                                    </svg>
                                                                                                </svg-icon>
                                                                                            </span>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group m-form__group">
                                                                    <label for="exampleInputEmail1">Remarks</label>
                                                                    <div class="input-group m-input-group">
                                                                        <textarea class="form-control ng-untouched ng-pristine ng-valid" id="notes" name="notes" rows="4" style={{minHeight: "100px;", lineHeight: "14px;"}}
                                                                        value={client_obs}
                                                                        onChange={e => setClient_obs(e.target.value)} 
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer" >
                                                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                                                    <button type="submit" class="btn btn-success" >Salvar</button>
                                                </div>
                                            </form>
                                        {/* <input autocomplete="doNotAutoComplete" id="id" name="id" type="hidden" value=""/> */}
                                        </div>
                                    
                                    </div>
                                    
                                </div>
                            </div>
            </div>
            </StyledInsert>
        </>
    )
}

export default AddClient;