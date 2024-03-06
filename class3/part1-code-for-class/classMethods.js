// Class Methods

function run() {
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

        addDepartment(department) {
            this.#departments.push(department)
        }

        removeDepartment(index) {
            this.#departments.splice(index, 1)
        }

    }
    
    const name = 'Santander'
    const description = 'A solução completa para o seu negócio'
    const departments = ['Crédito', 'Contas a pagar', 'Atendimento ao cliente']
    const clients =  [
        { id: 1, name: 'Ada', account: '12345', digit: 'X'}
    ]

    const bank = new Bank(name, description, departments, clients)
    console.log(bank)

    // bank.addDepartment('Análide de risco')

    // console.log(bank)

    // bank.removeDepartment(3)
    
    // console.log(bank)
}

run()