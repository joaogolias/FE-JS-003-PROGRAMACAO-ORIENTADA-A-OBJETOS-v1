// Objects

function runReview1() {
    const bank = {
        name: 'Santander',
        description: 'A solução completa para o seu negócio',
        departments: ['Crédito', 'Contas a pagar', 'Atendimento ao cliente'],
        clients: [
            { id: 1, name: 'Ada', account: '12345', digit: 'X'}
        ]
    }
    
    console.log('#Review1: ',bank)
}

runReview1()

