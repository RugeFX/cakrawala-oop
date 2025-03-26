import { Payment, PaymentStatus } from "./payment";

export class CreditCard extends Payment {
  constructor(
    amount: number,
    private cardNumber: string,
    private cardHolderName: string,
    private expiryDate: string,
    private cvv: string,
    date: Date = new Date()
  ) {
    super(amount, date);
  }

  protected override validatePayment(): string {
    if (this.cardNumber.length < 15) return "Invalid card number";
    if (!this.cardHolderName.trim()) return "Invalid card holder name";
    if (!this.expiryDate.trim()) return "Invalid expiry date";

    const [month, year] = this.expiryDate.split("/");
    const expiry = new Date(parseInt(`20${year}`), parseInt(month) - 1);
    if (expiry < new Date()) return "Card has expired";

    if (this.cvv.length < 3) return "Invalid CVV";

    return super.validatePayment();
  }

  public override processPayment(): void {
    const validate = this.validatePayment();

    if (validate !== "Valid") {
      this.status = PaymentStatus.FAILED;
      return console.error(
        `Credit Card payment processing failed. Reason: ${validate}`
      );
    }

    this.status = PaymentStatus.SUCCESSFUL;
    console.log(
      `Credit Card payment processed successfully for amount ${this.amount}`
    );
  }

  public override refundPayment(): void {
    if (this.status !== PaymentStatus.SUCCESSFUL)
      return console.error("Cannot refund a payment that was not successful");

    this.status = PaymentStatus.REFUNDED;
    console.log(`Refunding payment ${this.id} for amount ${this.amount}`);
  }
}
