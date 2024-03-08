// Bank Account

function runBankAccount() {
    class Bank {
        #name
        #clients

        constructor(name, clients) {
            this.#name = name
            this.#clients = clients
        }

        get name() {
            return this.#name
        }
        
        get clients() {
            return this.#clients
        }

        addClient(client) {
            this.#clients.push(client)
        }

    }

    class Client {
        #id
        #name
        #accounts

        constructor(id, name, accounts) {
            this.#id = id
            this.#name = name
            this.#accounts = accounts
        }
    }

    class BankAccount {
        #number
        #digit
        #amount

        constructor(number, digit, amount) {
            this.#number = number
            this.#digit = digit
            this.#amount = amount
        }

        get number() {
            return this.#number
        }

        get digit() {
            return this.#digit
        }

        get amount() {
            return this.#amount
        }
    }


    const bank = new Bank('Santander', [])
    const bankAccount = new BankAccount('123', '1', 1000)
    const client = new Client(1, 'Ada', [bankAccount])
    bank.addClient(client)

    console.log(bank)
}

runBankAccount()