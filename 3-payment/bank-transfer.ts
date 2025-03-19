import { Payment, PaymentStatus } from "./payment";

const SUPPORTED_BANKS = ["BNI", "BCA", "MANDIRI", "BRI"];

export class BankTransfer extends Payment {
  constructor(
    amount: number,
    private bankName: string,
    private accountNumber: string,
    private transferCode: string,
    date: Date = new Date()
  ) {
    super(amount, date);
  }

  protected validatePayment(): string {
    if (!this.accountNumber.trim()) return "Invalid account number";
    if (!this.transferCode.trim()) return "Invalid transfer code";
    if (!this.bankName.trim()) return "Invalid bank name";
    if (!SUPPORTED_BANKS.includes(this.bankName)) return "Invalid bank name";

    return super.validatePayment();
  }

  public processPayment(): void {
    const validate = this.validatePayment();

    if (validate !== "Valid") {
      this.status = PaymentStatus.FAILED;
      return console.error(
        `${this.bankName} Bank Transfer payment processing failed. Reason: ${validate}`
      );
    }

    this.status = PaymentStatus.SUCCESSFUL;
    console.log(
      `${this.bankName} Bank Transfer payment processed successfully for amount ${this.amount}`
    );
  }

  public refundPayment(): void {
    if (this.status !== PaymentStatus.SUCCESSFUL)
      return console.error("Cannot refund a payment that was not successful");

    this.status = PaymentStatus.REFUNDED;
    console.log(`Refunding bank transfer ${this.id} for amount ${this.amount}`);
  }
}
