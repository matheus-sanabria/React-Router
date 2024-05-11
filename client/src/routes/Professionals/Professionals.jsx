import ListProfessionals from "../../components/List/ListProfessionals";
import AddProfessional from "../../components/Insert/InsertProfessionals";
import StyledProfessionals from "./style";

export const Professionals = () => {
  return (
    <>
        <StyledProfessionals>
            <main className="MainPainel">     
                <ListProfessionals/>
                <AddProfessional/>
            </main>
        </StyledProfessionals>
    </>
  )
}
