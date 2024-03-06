// Classes

function runReview2() {
    class Bank {
        name
        departments
        description
        clients
    }
    
    const bank = new Bank()
    console.log('#Review2: ',bank)
    
    bank.name = 'Santander'
    bank.departments = ['Crédito', 'Contas a pagar', 'Atendimento ao cliente']
    bank.description = 'A solução completa para o seu negócio'
    bank.clients = [
        { id: 1, name: 'Ada', account: '12345', digit: 'X'}
    ]
    
    console.log('#Review2: ',bank)
}

runReview2()