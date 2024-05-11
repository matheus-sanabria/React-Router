import ListClients from "../../components/List/ListClients";
import AddClient from "../../components/Insert/InsertClients";
import StyledClients from "./style";

const Clients = () =>{
    return (
        <>
            <StyledClients>
                <main className="MainPainel">     
                    <ListClients/>
                    <AddClient/>
                </main>
            </StyledClients>
        </>
    );
};

export default Clients;