import React, { Fragment, useState } from "react";

const EditProfessional = ({ professional }) => {// constante EditTodo = ({ parametro }) => (arrow function){}
    const [professional_photo, setProfessional_photo] = useState(professional.professional_photo)
    const [professional_name, setProfessional_name] = useState(professional.professional_name) // constante, parametro, definir parametro = usarEstado ()
    const [professional_phone, setProfessional_phone] = useState(professional.professional_phone)
    const [professional_email, setProfessional_email] = useState(professional.professional_email)
    const [professional_birthDay, setProfessional_birthDay] = useState(professional.professional_birthDay)
    const [professional_birthMonth, setProfessional_birthMonth] = useState(professional.professional_birthMonth)
    const [professional_obs, setProfessional_obs] = useState(professional.professional_obs)

    const UpdateProfessional = async e => { //constante atualizarDescricao = assincrona evento arrowFunction {}
        e.preventDefault();// evento prevencao padrao
        // console.log('123');s
        
        try {// tentar
            const data = {
                professional_photo,
                professional_name,
                professional_phone,
                professional_email,
                professional_birthDay,
                professional_birthMonth,
                professional_obs
            }; // constante_corpo = { parametro description}
            const res = await fetch(`
            http://localhost:8081/professionals/${professional.professional_id}
            `,
            { // constante resposta = aguarde busca (endereco de busca $(valor)tabela_todo coluna_todo_id)
                    method: 'PUT', // metodo : "COLOCAR"
                    headers:  { "Content-Type": "application/json" }, // cabecalhos : {"Tipo_Conteudo" : "aplicacao/json" }
                    body: JSON.stringify(data) // corpo : JSON.restringir(constante_corpo)
                }
            )
            window.location = "/profissionais" // janela.localização = "/"
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Fragment>
            
            <button
                type="button"
                className="btn edit"
                data-bs-toggle="modal"
                data-bs-target={`#id${professional.professional_id}`}
            >
                <i class="fa-regular fa-pen-to-square"></i>
            </button>

            
            <div
                className="modal"
                id={`id${professional.professional_id}`}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div class="modal-header">
                            <button aria-label="Close" class="close btn" data-bs-dismiss="modal" type="button">
                                <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                            </button>
                            <h5 class="modal-title" id="exampleModalLabel">Editar professional</h5>
                            <button aria-label="Close" id="close-x" class="close btn" data-bs-dismiss="modal" type="button">
                                <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div class="modal-body scroll form-modal" id="modalAdd">
                            <div class="portlet light">
                                <form class="form ng-pristine ng-invalid ng-touched" onSubmit={e => UpdateProfessional(e)}>
                                    <div class="portlet-body form">
                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <div class="form-add-picture">
                                                            <input 
                                                                accept="image/*" 
                                                                autocomplete="doNotAutoComplete" 
                                                                id="AddUserChangePhoto" 
                                                                style={{display: "none",}} 
                                                                type="image"
                                                                value={professional_photo}
                                                                onChange={e => setProfessional_photo(e.target.value)}    
                                                            />
                                                                <div class="bordered-pic">
                                                                    <svg-icon src="">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                            <g>
                                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                                <path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </svg-icon>
                                                                </div>
                                                                <div class="edit-pic-top-icon">
                                                                    <i class="fa-regular fa-pen-to-square" style={{color: "#ffffff"}}></i>
                                                                    
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-5" style={{paddingLeft: "27.2px;"}}>
                                                    <div class="form-group m-form__group">
                                                        <label for="name">Nome</label>
                                                        <div class="input-group m-input-group">
                                                            <input 
                                                                aria-describedby="basic-addon1" 
                                                                autocomplete="doNotAutoComplete" 
                                                                class="form-control m-input ng-pristine ng-invalid input-invalid ng-touched" 
                                                                id="professional_name" 
                                                                no-init-space="" 
                                                                type="text"
                                                                value={professional_name}
                                                                onChange={e => setProfessional_name(e.target.value)} 
                                                            />
                                                        </div>
                                                        {/* <div class="input-error" no-lines="" text-wrap="">
                                                            <p>Required field</p>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group m-form__group">
                                                        <label for="email">E-mail</label>
                                                        <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                            <input 
                                                                aria-describedby="basic-addon1" 
                                                                autocomplete="doNotAutoComplete" 
                                                                class="form-control m-input ng-untouched ng-pristine ng-valid" 
                                                                type="text"
                                                                value={professional_email}
                                                                onChange={e => setProfessional_email(e.target.value)} 
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
                                                        <label for="phone">Telefone</label>
                                                        <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                            <input 
                                                                aria-describedby="basic-addon1" 
                                                                autocomplete="doNotAutoComplete" 
                                                                class="form-control m-input ng-untouched ng-pristine ng-valid" 
                                                                name="phone" 
                                                                phone-mask=""
                                                                type="tel" 
                                                                maxlength="18"
                                                                value={professional_phone}
                                                                onChange={e => setProfessional_phone(e.target.value)} 
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
                                                                <label for="birthDay">Aniversário (dia)</label>
                                                                <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                                    <select class="custom-select form-control m-input ng-untouched ng-pristine ng-valid" id="dia_niver" integer="" maxlength="2" name="dia_niver" type="text"
                                                                        value={professional_birthDay}
                                                                        onChange={e => setProfessional_birthDay(e.target.value)}  
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
                                                                <span class="m-input-icon__icon m-input-icon__icon--left">
                                                                    <span>
                                                                        
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for="birthMonth">Aniversário (mês)</label>
                                                            <div class="input-group m-input-group m-input-icon m-input-icon--left">
                                                                <select autocomplete="not" class="custom-select form-control m-input ng-untouched ng-pristine ng-valid" id="mes_niver" integer="" maxlength="2" name="mes_niver" 
                                                                    value={professional_birthMonth}
                                                                    onChange={e => setProfessional_birthMonth(e.target.value)} 
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
                                                            value={professional_obs}
                                                            onChange={e => setProfessional_obs(e.target.value)} 
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="modal-footer" >
                                                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                                                    <button type="submit" class="btn btn-success" >Salvar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            {/* <input autocomplete="doNotAutoComplete" id="id" name="id" type="hidden" value=""/> */}
                            </div>
                        
                        </div>

                    </div>{/* modal-content */}
                </div>{/* modal-dialog */}
            </div>{/* modal */}

            
        </Fragment>
    ) 
};

export default EditProfessional;