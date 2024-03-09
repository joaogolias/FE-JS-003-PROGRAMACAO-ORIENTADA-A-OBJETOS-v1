// ProfitableBankAccount 19h48

            // for(const account of accounts) {
            //     arr.push()
            //     // filtro

            // } 
            // // map -> criar um novo a partir outro
            // // filter -> remover elementos do array
            // // some -> ao mesmo elemento cumpre uma condição
            // // forEach -> aplicar uma lógica nos elementos (não map, filter, some)


            // /**
            //  * map:
            //  * 
            //  *      -> semânticas
            //  *      -> .map: retorna um array
            //  *      -> callback: retorna algum elemento
            //  * 
            //  */

            // const amounts = accounts.map((account) => {
            //     return account.amount
            // })

            // /**
            //  * forEach:
            //  *     -> semântica
            //  *      -> forEach = (void) returna nada 
            //  *     -> callback = (void) que NUNCA retorna nada ()
            //  */
            
function runProfitableBankAccount() {
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

        set amount(value) {
            this.#amount = value
        }

        addAmount(amount) {
            this.#amount += amount
        }

        withdraw(value){
            this.#amount -= value
            return this.amount
        }
    }

    class SavingsBankAccount extends BankAccount {
        #minimumValue

        constructor(number, digit, amount, minimumValue) {
            super(number, digit, amount)
            this.#minimumValue = minimumValue
        }
        
        get minimumValue() {
            return this.#minimumValue
        }

        printAccount() {
            console.log(this.account)
        }

        withdraw(value){
            const newAmount = this.amount - value

            if(newAmount >= this.#minimumValue) {
                return super.withdraw(newAmount)
            }

            return this.amount
        }
    }

    class ProfitableBankAccount extends BankAccount {
        #INTEREST = 0.01
        #ADD_AMOUNT_COMMISSION = 0.5
        #WITHDRAW_COMMISSION = 3

        constructor(number, digit, amount) {
            super(number, digit, amount)
        }
    
        printAccount() {
            console.log(this.account)
        }
        
        // "Evitar constantes mágicas" 
        
        addAmount(value) {
            this.amount += value + 0.01*value - 3
            // this.amount += value + this.#INTEREST*value - this.#WITHDRAW_COMMISSION
        }

        withdraw(value){
            this.amount = this.amount - value - 0.5
            // this.amount = this.amount - value - this.#ADD_AMOUNT_COMMISSION
            return this.amount
        }
    }

     

    class Client {
        #id
        #name
        #accounts = []

        #VALID_ACCOUNTS = [BankAccount, SavingsBankAccount, ProfitableBankAccount]

        constructor(id, name, accounts) {
            this.#id = id
            this.#name = name
            accounts.forEach((account) => {
                this.addAccount(account)
            })
        }

        addAccount(account) {
            if(this.validateAccount(account)) {
                this.#accounts.push(account)
            }
        }
        
        validateAccount(account) {
            return this.#VALID_ACCOUNTS.some((el) => account instanceof el)
        }

        get accounts() {
            return this.#accounts
        }
    }

    // PART 1 - BANK ACCOUNT
    const bankAccount = new BankAccount('123', '1', 1000)
    bankAccount.withdraw(100)
    console.log("Part 1 - bankAccount.amount: ", bankAccount.amount) // Expected: 900

    // PART 2 - SAVINGS BANK ACCOUNT
    const savingsBankAccount = new SavingsBankAccount('123', '1', 150, 100)
    console.log("Part 2 - savingsBankAccount.minimumValue: ", savingsBankAccount.minimumValue) // Expected: 100

    savingsBankAccount.withdraw(50)
    console.log("Part 2 - savingsBankAccount.amount #1: ", savingsBankAccount.amount) // Expected: 100

    savingsBankAccount.amount = 150
    savingsBankAccount.withdraw(51)
    console.log("Part 2 - savingsBankAccount.amount #2: ", savingsBankAccount.amount) // Expected: 150

    // // PART 3 - PROFITABLE BANK ACCOUNT
    const profitableBankAccount = new ProfitableBankAccount('123', '1', 1000)
    
    profitableBankAccount.addAmount(500)
    console.log("Part 3 - profitableBankAccount.amount #1: ", profitableBankAccount.amount) // Expected: 1502

    profitableBankAccount.withdraw(100)
    console.log("Part 3 - profitableBankAccount.amount #2: ", profitableBankAccount.amount) // Expected: 1401.5


    // PART 4 - CLIENT
    const firstClient = new Client(1, 'Ada', [bankAccount])
    console.log("Part 4 - firstClient.accounts: ", firstClient.accounts) // Expected: []

    const secondClient = new Client(1, 'Ada', [savingsBankAccount])
    console.log("Part 4 - secondClient.accounts #1: ", secondClient.accounts) // Expected: [SavingsBankAccount]

    secondClient.addAccount(profitableBankAccount)
    console.log("Part 4 - secondClient.accounts #2: ", secondClient.accounts) // Expected: [SavingsBankAccount, ProfitableBankAccount]

    secondClient.addAccount(bankAccount)
    console.log("Part 4 - secondClient.accounts #3: ", secondClient.accounts) // Expected: [SavingsBankAccount, ProfitableBankAccount]
}

runProfitableBankAccount()