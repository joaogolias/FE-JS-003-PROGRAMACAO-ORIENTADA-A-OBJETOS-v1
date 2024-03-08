// Classes

function runReview2() {
    class Bank {
        name
        departments
        description
        clients
    }
    
    const bank = new Bank()
    
    bank.name = 'Santander'
    bank.departments = ['Crédito', 'Contas a pagar', 'Atendimento ao cliente']
    bank.description = 'A solução completa para o seu negócio'
    bank.clients = [
        { id: 1, name: 'Ada', account: '12345', digit: 'X'}
    ]
    
    // example of copying an object
    const bank2 = { ...bank }
    bank2.description = 'Oi'
    console.log('#Review2 - bank: ', bank)
    console.log('#Review2 - bank2: ', bank2)
}

runReview2()