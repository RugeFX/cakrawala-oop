import { Payment, PaymentStatus } from "./payment";

export const SUPPORTED_WALLET_PROVIDERS = ["GOPAY", "OVO", "DANA"];

export class DigitalWallet extends Payment {
  constructor(
    amount: number,
    private provider: string,
    private walletId: string,
    private phoneNumber: string,
    date: Date = new Date()
  ) {
    super(amount, date);
  }

  protected validatePayment(): string {
    if (!SUPPORTED_WALLET_PROVIDERS.includes(this.provider))
      return "Invalid provider";
    if (!this.walletId.trim()) return "Invalid wallet ID";

    if (this.phoneNumber.length < 11 || this.phoneNumber.length > 15)
      return "Invalid phone number length";
    if (!this.phoneNumber.match(/^\+?\d+$/))
      return "Invalid phone number format";

    return super.validatePayment();
  }

  public processPayment(): void {
    const validate = this.validatePayment();

    if (validate !== "Valid") {
      this.status = PaymentStatus.FAILED;
      return console.error(
        `${this.provider} Digital Wallet payment processing failed. Reason: ${validate}`
      );
    }

    this.status = PaymentStatus.SUCCESSFUL;
    console.log(
      `${this.provider} Digital Wallet payment processed successfully for amount ${this.amount}`
    );
  }

  public refundPayment(): void {
    if (this.status !== PaymentStatus.SUCCESSFUL)
      return console.error("Cannot refund a payment that was not successful");

    this.status = PaymentStatus.REFUNDED;
    console.log(
      `Refunding digital wallet payment ${this.id} for amount ${this.amount}`
    );
  }
}
