import { useParams, useNavigate } from "react-router-dom"

export const ContactDetails = () => {
const { id } = useParams();

    // 6 - redirect
    const navigate = useNavigate();

    const handleClient = () => {
        console.log('Contato Enviado!');
        return navigate('/')
    }
  return (
    <div>
        <h1>Exibindo mais informações do cliente {id}</h1>
        <button onClick={handleClient}>Enviar Mensagem</button>
    </div>
  )
}
