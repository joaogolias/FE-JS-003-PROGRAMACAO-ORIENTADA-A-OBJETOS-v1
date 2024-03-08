// Polymorphism

function runPolymorphism() {
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

        addAmount(amount) {
            console.log('Adding savings')
            super.addAmount(amount)
        }
    }

    const bankAccount = new BankAccount('123', '1', 1000)
    const savingsBankAccount = new SavingsBankAccount('123', '1', 200)

    console.log("bankAccount instanceof BankAccount: ", bankAccount instanceof BankAccount)
    console.log("savingsBankAccount instanceof SavingsBankAccount: ", savingsBankAccount instanceof SavingsBankAccount)

    console.log("savingsBankAccount instanceof BankAccount: ", savingsBankAccount instanceof BankAccount)
    console.log("bankAccount instanceof SavingsBankAccount: ", bankAccount instanceof SavingsBankAccount)

}

runPolymorphism()