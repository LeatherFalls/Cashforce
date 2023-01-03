# Cashforce Challenge
## Uma aplicação Full-Stack.

## Clone o projeto

```bash
  https: git clone https://github.com/LeatherFalls/Cashforce.git
  ssh: git clone git@github.com:LeatherFalls/Cashforce.git
```
<details>
 <summary>
  <strong>Instalação(sem docker)</strong>
 </summary>

 #### Frontend
  ```bash
   cd app/frontend
   npm install
  ```

 #### Backend
  ```bash
   cd app/backend
   npm install
  ```
</details>

<details>
 <summary>
  <strong>Instalação com docker</strong>
 </summary><br>

  ```bash
   cd app/
   docker-compose up
  ```
</details>

## Rodando o projeto

#### Backend

```bash
  cd app/backend
  npm start ou npm run dev (watch mode)
```

#### Frontend

```bash
  cd app/frontend
  npm run dev
```

## Rodando os testes

Para rodar os testes, execute os seguinte comandos

<details>
  <summary>Testes de integração</summary><br>
  
   ```bash
     cd app/backend
     npm run integration:test
   ```
</details>

<details>
  <summary>Testes unitários</summary><br>
  
   ```bash
     cd app/backend
     npm run unit:test
   ```
</details>

## Documentação da API

#### GET /nf
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Retorna todas as notas fiscais | http://localhost:3000/nf |
<details>
  <summary>
    <strong>Exemplo de retorno</strong>
  </summary><br>
   
   ```json
    [
      {
        "orderNumber": "18153",
        "emissionDate": "2020-10-30T11:00:00-03:00",
        "value": "198450",
        "orderStatusBuyer": "0",
        "buyer": {
            "name": "SACADO 001"
      },
        "provider": {
            "name": "CEDENTE 002"
        }
      },
      ...
    ]
   ```
</details>

## Stack utilizada

**Front-end:** VueJS, CSS

**Back-end:** Node, Express, Javascript, Sequelize

**Banco:** MySQL