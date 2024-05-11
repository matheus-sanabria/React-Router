import styled from 'styled-components';

const StyledProfessionals = styled.div`
    /* Professionals Page */
    .MainPainel{
    width: 100%;
    position: absolute;
    top: 50px;
    }

    /* starts main-painel */
    .Search{
    width: 100%;
    height: 50px;
    background-color: #fae0e4;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: nowrap; */
    }

    .Search form{
    width: 100%;
    height: 35px;
    display: flex;
    }

    .Search form .search-icon{
    width: 35px;
    background-color: white;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .Search form input{
    width: calc(100%);
    height: 100%;
    outline: none;
    border: none;
    }

    /* Mobile */
    @media screen and (max-width: 480px){
        
    }

    /* Extra small devices */
    @media screen and (min-width: 400px) and (max-width: 767px){

    }

    /* Small Tablets */
    @media screen and (min-width: 768px) and (max-width: 991px){
        
    }
    
    /* Large tabrets/laptops */
    @media screen and (min-width: 992px){
        .MainPainel{
            width: calc(100% - 240px);
            position: absolute;
            top: 50px;
            left: 240px;
        }
    }

    /* Desktops */
    @media screen (min-width: 1200px) and (max-width: 1199){}


    /* Extra large screens */
    @media screen and (min-width: 1920px){}
`
export default StyledProfessionals;