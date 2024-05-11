import styled from 'styled-components';

const StyledList = styled.div`
    .list{
        overflow-y: auto;
        height: calc(100vh - 50px);
    }
    
    /* width */
    ::-webkit-scrollbar {
        width: 0px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #af3156; 
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #721e37; 
    }
    
    .data-number{
        padding: 10px 0;
    }
    
    .cards{
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
        padding: 5px 0 20px 0;
    }
    .cards-single{
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 35px 15px ;
        position: relative;
        background-color: #ffffff;
    }
        
    .actions{
        display: flex;
        flex-direction: row;
        gap: 5px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
        
    .actions > .btn{
        padding: 0;
    }
        
        
        
    .edit{
        color: rgb(30, 196, 13);
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background-color: rgba(30, 196, 13, 0.3);
        border: 1px solid rgb(30, 196, 13);
        display: flex;
        justify-content: center;
        align-items: center;
    }
        
    .actions > .edit:hover{
        color: rgb(30, 196, 13);
        border: 1px solid rgb(30, 196, 13);
    }
        
    .delete{
        width: 25px;
        height: 25px;
        border-radius: 5px;
        /* padding: 2px; */
        background-color: rgba(255, 0, 0, 0.3);
        border: 1px solid rgb(255,0,0);
        color: rgb(255,0,0);
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .actions > .delete:hover{
        color: rgb(255,0,0);
        border: 1px solid rgb(255,0,0);
    }
        
    .single__header{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
        
    .photo{
        width: 50px;
        height: 50px;
        background-color: #ccc;
        border-radius: 50px;
    }
        
    p{
        all: unset;
        /* margin-left: 10px; */
    }
        
        
    .name{
        font-weight: 500;
    }   
        
    .single__body{
        padding-top: 10px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }
        
    .single__body__icon{
        display: flex;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
    }
        
    .body__contact{
        display: flex;
        align-items: center;
        
    }
        
    .body__access{
        display: flex;
        align-items: center;
    }
        
    .body__access .access{
        color: green;
        font-weight: 500;
    }
    /* Mobile */
    @media screen and (max-width: 480px){}

    /* Extra small devices */
    @media screen and (min-width: 481px) and (max-width: 767px){}

    /* Small Tablets */
    @media screen and  (min-width: 768px){
        .cards{
            display: flex;
            flex-direction: row;
            gap: 20px;
            padding: 5px 0 20px 0;
            justify-content: center;
          }
          .cards-single{
            width: 31%;
            /* margin-right: -4px; */
          }
    }

    /* Large tabrets/laptops */
    @media screen and (min-width: 992px) and (max-width: 1199px){}

    /* Desktops */
    @media screen and (min-width: 1200px) and (max-width: 1199px){}


    /* Extra large screens */
    @media screen and (min-width: 1920px){}
`

export default StyledList;