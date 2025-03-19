export enum PaymentStatus {
  PROCESSING = "processing",
  SUCCESSFUL = "successful",
  FAILED = "failed",
  REFUNDED = "refunded",
}

export abstract class Payment {
  protected id: string = crypto.randomUUID();
  protected status: PaymentStatus = PaymentStatus.PROCESSING;

  constructor(protected amount: number, protected date: Date = new Date()) {}

  public getID(): string {
    return this.id;
  }

  public getStatus(): PaymentStatus {
    return this.status;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getDate(): Date {
    return this.date;
  }

  public refundPayment(): void {
    if (this.status !== PaymentStatus.SUCCESSFUL)
      return console.error("Cannot refund a payment that was not successful");

    this.status = PaymentStatus.REFUNDED;
    console.log(`Refunding payment ${this.id} for amount ${this.amount}`);
  }

  protected validatePayment(): string {
    if (this.amount <= 0) return "Invalid amount";
    return "Valid";
  }
  public abstract processPayment(): void;
}
