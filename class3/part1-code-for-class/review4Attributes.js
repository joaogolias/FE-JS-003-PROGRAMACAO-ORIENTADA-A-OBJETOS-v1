// Attributes

function runReview4() {
    class Bank {
        #name
        description
        #departments
        #clients

        constructor(name, description, departments, clients) {
            this.#name = name
            this.description = description
            this.#departments = departments
            this.#clients = clients
        }

        get name() {
            return this.#name
        }
        
        set name(value) {
            this.#name = value
        } 

    }
    
    const name = 'Santander'
    const description = 'A solução completa para o seu negócio'
    const departments = ['Crédito', 'Contas a pagar', 'Atendimento ao cliente']
    const clients =  [
        { id: 1, name: 'Ada', account: '12345', digit: 'X'}
    ]

    const bank = new Bank(name, description, departments, clients)
    console.log('#Review4: ', bank)

    // bank.#name = 'Ada Bank'
    // console.log('#Review4: ', bank.#name)

    console.log('#Review4 - name: ', bank.name)
    bank.name = 'Ada Bank'
    console.log('#Review4 - name: ', bank.name)
    bank.description = 'O bank mais tech do Brasil'
    console.log('#Review4 - description: ', bank.description)
}

runReview4()