import styled from 'styled-components';

const StyledInsert = styled.div`
    /* add client */

    button.add{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    padding: 0;
    border: 0;
    position:absolute;
    right: 20px;
    bottom: 20px;
    background-color: #af3156;
    color: white;
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.5);
    }

    .form-group{
        padding: 5px 0;
    }

    .col-md-3 {
        display: flex;
    }

    .birth {
        width: 40%;
    }

    .birth-value {
        width: 60%;
        display: flex;
        gap: 10px;
        text-align: center;
    }

    .birth-value__day {
        width: 30%;
    }

    select#dia_niver {
        text-align: center;
    }

    .birth-month {
        width: 70%;
    }

    select#mes_niver {
        text-align: center;
    }


    .modal-footer{
        justify-content: center;
        padding: 16px 0 0 0;
    }

    .modal-footer button.btn{
        width: 88px;
    }


    /* Mobile */
    @media screen and (max-width: 480px){}

    /* Extra small devices */
    @media screen and (min-width: 481px) and (max-width: 767px){}

    /* Small Tablets */
    @media screen and  (min-width: 768px) and (max-width: 991px){}

    /* Large tabrets/laptops */
    @media screen and (min-width: 992px) and (max-width: 1199px){}

    /* Desktops */
    @media screen and (min-width: 1200px) and (max-width: 1199px){}


    /* Extra large screens */
    @media screen and (min-width: 1920px){}
`
export default StyledInsert;