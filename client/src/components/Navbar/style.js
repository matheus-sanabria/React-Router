import styled from 'styled-components';

const StyledNavbar = styled.div`
// starts navbar button
    button.btn{
        position: absolute;
        top: -44.5px;
        left: 5px;
        display:flex;
    }
  
    button.btn i{
        font-size: 25px;
        padding-left:-5px;
    }
// ends navbar button

// starts offcanvas
    .offcanvas-start {
        width: 240px;
        background-color: #af3156;
    }
    .offcanvas-header{
        // padding-bottom: 0;
        height: 50px;
        display:flex;
        juntify-content: center;
    }

    .offcanvas-header > h1{
        font-size: 1.5em;
        color: white;
        margin: 0 auto;
    }
    .offcanvas-body{
        padding: 0;
    }
// ends offcanvas

// starts Navbar
    .Navbar{
        display: flex;
        flex-direction: column;
        text-align: left;
        background-color: #af3156;
        position: absolute;
        left: 0;
        top: 50px;
        // height: calc(100vh - 50px);
        font-size: 1em;
    }
    .Navbar__list {
        display: flex;
        flex-direction: column;
        text-align: left;
        position: absolute;
        padding-left: 0; 
        top: 50px;
        width: 100%;
        height: calc(100vh - 50px);
    }
        .select{
            background-color: rgba(250, 224, 228, 0.250)!important;
        }
    .Navbar__list a{
        padding: 15px 30px;
        color: white;

    }
    .Navbar__list a:hover{
        background-color: #ec81a1;
        color: #af3156;
        font-weight: bold;
    }
    
    .Navbar__list a i{
    padding-right: 10px;
}
// ends Navbar

    /* Mobile */
    @media screen and (max-width: 480px){
        
    }

    /* Extra small devices */
    @media screen and (min-width: 400px) and (max-width: 767px){
        .offcanvas.offcanvas-start {
            // width: 50%;
        }
    }

    /* Small Tablets */
    @media screen and (min-width: 768px) and (max-width: 991px){
        
    }
    
    /* Large tabrets/laptops */
    @media screen and (min-width: 992px) and (max-width: 1199x){
        .Navbar{
            top: 0!important;
        }
    }

    /* Desktops */
    @media screen (min-width: 1200px) and (max-width: 1199){}


    /* Extra large screens */
    @media screen and (min-width: 1920px){}
`

export default StyledNavbar;