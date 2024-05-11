const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Rotas

// app.get('/clients', (req, res) => {
//     res.send('acessado com sucesso!')
// })

// ### rotas para página clientes ###
// inserir cliente
app.post("/clients", async (req, res) => {// app postar no caminho "/todos", func assincrona(par_requisicao, par_resposta) funcao de flecha
    try {// tente 
        const { 
            client_photo,
            client_name,
            client_phone,
            client_email,
            client_birthDay,
            client_birthMonth,
            client_obs
        } = req.body;// const { descricao } valor igual ao par_respost chamar corpo

        const insertClient = `
        INSERT INTO clients (
            client_photo,
            client_name,
            client_phone,
            client_email,
            client_birthDay,
            client_birthMonth,
            client_obs
        ) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *;
        `

        // const novoClient = aguarde consulta de pool("INSERIR EM afazer (tabela_descricao) VALORES($1) RETORNANDO *")
        const newClient = await pool.query(insertClient, [
                client_photo,
                client_name,
                client_phone,
                client_email,
                client_birthDay,
                client_birthMonth,
                client_obs
            ]// const descricao
        )
        res.json(newClient.rows[0]);// par_resposta chamar metodo json em(novoAfazer chamar linhas[indice_0])
    } catch (error){
        // console.error(error.message)
        console.log(error.message)
    }

})

// listar clientes
app.get("/clients/", async (req, res) => {
    try {
        const listClients = await pool.query("SELECT * FROM clients")
        res.json(listClients.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// listar cliente especifico
app.get('/clients/:client_id', async (req, res) => {
    try {
        const { client_id } = req.params;
        const listClient = await pool.query('SELECT * FROM clients WHERE client_id = $1', [client_id])
        res.json(listClient.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})


// atualizar cliente
app.put("/clients/:client_id", async (req, res) => {
    try {
        const { client_id } = req.params;
        const { 
            client_photo,
            client_name,
            client_phone,
            client_email,
            client_birthDay,
            client_birthMonth,
            client_obs
        } = req.body// const { descricao } valor igual ao par_respost chamar corpo
        
        const updateClientData = `
        UPDATE clients SET (
            client_photo,
            client_name,
            client_phone,
            client_email,
            client_birthDay,
            client_birthMonth,
            client_obs
        ) = ($1,$2,$3,$4,$5,$6,$7) WHERE client_id = $8 ;
        `
        const updateClient = await pool.query(updateClientData, [ 
            client_photo,
            client_name,
            client_phone,
            client_email,
            client_birthDay,
            client_birthMonth,
            client_obs,
            client_id
        ])
        res.json("Cliente atualizado com sucesso!")
    } catch (error) {
        console.log(error.message)
    }
})

// deletar cliente
app.delete("/clients/:client_id", async (req, res) => {
    try {
        const { client_id } = req.params;
        const deleteClient = await pool.query(`
            DELETE FROM clients WHERE client_id = $1
        `, [client_id])
        res.json("Cliente deletado com sucesso!")
    } catch (error) {
        
    }
})


// ### rotas para página profissionais ###
// inserir profissonal
app.post("/professionals", async (req, res) => {// app postar no caminho "/profissionais", func assincrona(par_requisicao, par_resposta) funcao de flecha
    try {// tente 
        const { 
            professional_photo,
            professional_name,
            professional_phone,
            professional_email,
            professional_birthDay,
            professional_birthMonth,
            professional_obs
        } = req.body;// const { descricao } valor igual ao par_respost chamar corpo

        const insertProfessional = `
        INSERT INTO professionals (
            professional_photo,
            professional_name,
            professional_phone,
            professional_email,
            professional_birthDay,
            professional_birthMonth,
            professional_obs
        ) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *;
        `

        // const novoClient = aguarde consulta de pool("INSERIR EM afazer (tabela_descricao) VALORES($1) RETORNANDO *")
        const newProfessional = await pool.query(insertProfessional, [
            professional_photo,
            professional_name,
            professional_phone,
            professional_email,
            professional_birthDay,
            professional_birthMonth,
            professional_obs
            ]// const descricao
        )
        res.json(newProfessional.rows[0]);// par_resposta chamar metodo json em(novoAfazer chamar linhas[indice_0])
    } catch (error){
        // console.error(error.message)
        console.log(error.message)
    }

})

// listar profissionais
app.get("/professionals/", async (req, res) => {
    try {
        const listProfessionals = await pool.query("SELECT * FROM professionals")
        res.json(listProfessionals.rows)
    } catch (error) {
        console.log(error.message)
    }
})  

// listar profissional especifico
app.get('/professionals/:professional_id', async (req, res) => {
    try {
        const { professional_id } = req.params;
        const listProfessional = await pool.query('SELECT * FROM professionals WHERE professional_id = $1', [professional_id])
        res.json(listProfessional.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})


// atualizar profissional
app.put("/professionals/:professional_id", async (req, res) => {
    try {
        const { professional_id } = req.params;
        const { 
            professional_photo,
            professional_name,
            professional_phone,
            professional_email,
            professional_birthDay,
            professional_birthMonth,
            professional_obs
        } = req.body// const { descricao } valor igual ao par_respost chamar corpo
        
        const updateProfessionalData = `
        UPDATE professionals SET (
            professional_photo,
            professional_name,
            professional_phone,
            professional_email,
            professional_birthDay,
            professional_birthMonth,
            professional_obs
        ) = ($1,$2,$3,$4,$5,$6,$7) WHERE professional_id = $8 ;
        `
        const updateProfessional = await pool.query(updateProfessionalData, [ 
            professional_photo,
            professional_name,
            professional_phone,
            professional_email,
            professional_birthDay,
            professional_birthMonth,
            professional_obs,
            professional_id
        ])
        res.json("Profissional atualizado com sucesso!")
    } catch (error) {
        console.log(error.message)
    }
})

// deletar cliente
app.delete("/professionals/:professional_id", async (req, res) => {
    try {
        const { professional_id } = req.params;
        const deleteProfessional = await pool.query(`
            DELETE FROM professionals WHERE professional_id = $1
        `, [professional_id])
        res.json("Profissional deletado com sucesso!")
    } catch (error) {
        
    }
})


app.listen(8081, () => {
    console.log('O servidor está rodando em http://localhost:8081/')

})