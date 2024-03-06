// Constructors

function runReview3() {
    class Bank {
        name
        description
        departments
        clients

        constructor(name, description, departments, clients) {
            this.name = name
            this.description = description
            this.departments = departments
            this.clients = clients
        }
    }
    
    const name = 'Santander'
    const description = 'A solução completa para o seu negócio'
    const departments = ['Crédito', 'Contas a pagar', 'Atendimento ao cliente']
    const clients =  [
        { id: 1, name: 'Ada', account: '12345', digit: 'X'}
    ]

    const bank = new Bank(name, description, departments, clients)
    console.log('#Review3: ', bank)
    
}

runReview3()