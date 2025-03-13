class BankAccount {
        private accountNumber: string = crypto.randomUUID();
        private balance: number = 0;

        constructor(
                private holderName: string,
        ) { }

        public getAccountNumber() {
                return this.accountNumber;
        }

        public getHolderName() {
                return this.holderName;
        }

        public getBalance() {
                return this.balance;
        }

        public setHolderName(holderName: string) {
                if (!holderName || holderName.trim() === "")
                        return console.error("Holder Name cannot be empty!");

                this.holderName = holderName;
        }

        public deposit(amount: number) {
                if (amount <= 0)
                        return console.error("Amount cannot be negative or zero!");

                this.balance += amount;
        }

        public withdraw(amount: number) {
                if (amount <= 0)
                        return console.error("Amount cannot be negative or zero!");

                if (amount > this.balance)
                        return console.error("Withdrawal amount cannot be larger than your current balance!");

                this.balance -= amount;
        }

        public transfer(amount: number, transferAccount: BankAccount) {
                if (amount <= 0)
                        return console.error("Amount cannot be negative or zero!");

                if (amount > this.balance)
                        return console.error("Transfer amount cannot be larger than your current balance!");

                this.withdraw(amount);
                transferAccount.deposit(amount);
        }
}

class Utils {
        public static formatIDR(value: number) {
                return new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR"
                }).format(value);
        }
}

function main() {
        const zackyAccount = new BankAccount("Zacky");
        const anggaraAccount = new BankAccount("Anggara");

        // CASE 1: cannot deposit or withdraw negative amount
        // these calls shouldn't work
        zackyAccount.deposit(-100_000);
        zackyAccount.withdraw(-100_000);
        console.log(Utils.formatIDR(zackyAccount.getBalance()));
        // these calls should work
        zackyAccount.deposit(100_000);
        zackyAccount.withdraw(50_000);
        console.log(Utils.formatIDR(zackyAccount.getBalance()));
        // zackyAccount balance: 50.000

        // CASE 2: cannot withdraw amount larger that current balance
        zackyAccount.withdraw(60_000);
        console.log(Utils.formatIDR(zackyAccount.getBalance()));

        // CASE 3: transfers w/ validation
        // this should fail
        zackyAccount.transfer(55_000, anggaraAccount);
        console.log("Zacky:", Utils.formatIDR(zackyAccount.getBalance()));
        console.log("Anggara: ", Utils.formatIDR(anggaraAccount.getBalance()));

        // this should succees
        zackyAccount.transfer(25_000, anggaraAccount);
        console.log("Zacky:", Utils.formatIDR(zackyAccount.getBalance()));
        console.log("Anggara: ", Utils.formatIDR(anggaraAccount.getBalance()));
}

main();
