// Inheritance

function runInheritance() {
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

        addAmount(amount) {
            this.#amount += amount
        }
    }

    class SavingsBankAccount extends BankAccount {
        constructor(number, digit, amount) {
            super(number, digit, amount)
        }
    
        printAccount() {
            // console.log(super.#account) // Dá um erro
            console.log(this.account) // Funciona, porque é um método herdado
        }

        addAmount(amount) {
            console.log('Adding savings')
            super.addAmount(amount)
        }

        get amount() {
            return super.amount * 2
        }
    }

    const bankAccount = new BankAccount('123', '1', 1000)
    bankAccount.addAmount(100)

    console.log('bankAccount: ', bankAccount)

    const savingsBankAccount = new SavingsBankAccount('123', '1', 200)
    savingsBankAccount.addAmount(100)
    console.log('savingsBankAccount: ', savingsBankAccount.amount)
    
}

runInheritance()