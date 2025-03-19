import { CreditCard } from "./credit-card";
import { DigitalWallet } from "./digital-wallet";
import { BankTransfer } from "./bank-transfer";

class Main {
  private validCreditCard: CreditCard;
  private invalidCreditCard: CreditCard;

  private validDigitalWallet: DigitalWallet;
  private invalidDigitalWallet: DigitalWallet;

  private validBankTransfer: BankTransfer;
  private invalidBankTransfer: BankTransfer;

  constructor() {
    // Credit Card
    this.validCreditCard = new CreditCard(
      100_000,
      "4111111111111111",
      "Ahmad Zacky",
      "12/25",
      "123"
    );
    this.invalidCreditCard = new CreditCard(
      -10_000,
      "4111111111111111",
      "Johnny",
      "12/25",
      "123"
    );

    // Digital Wallet
    this.validDigitalWallet = new DigitalWallet(
      200_000,
      "GOPAY",
      "123",
      "+6281234567890"
    );
    this.invalidDigitalWallet = new DigitalWallet(
      150_000,
      "LINKAJA",
      "",
      "+6281234567890"
    );

    // Bank Transfer
    this.validBankTransfer = new BankTransfer(
      300_000,
      "BNI",
      "1234567890",
      "123456"
    );
    this.invalidBankTransfer = new BankTransfer(250_000, "UNKNOWN", "", "");
  }

  public start() {
    console.log("======= Processing Payments =======");
    this.processPayments();
    console.log("\n======= Refunding Payments =======");
    this.refundPayments();
  }

  private processPayments() {
    console.log("Processing valid Credit Card payment: ");
    this.validCreditCard.processPayment();
    console.log("Processing valid Bank Transfer payment: ");
    this.validBankTransfer.processPayment();
    console.log("Processing valid Digital Wallet payment: ");
    this.validDigitalWallet.processPayment();

    console.log("\nProcessing invalid Credit Card payment: ");
    this.invalidCreditCard.processPayment();
    console.log("Processing invalid Bank Transfer payment: ");
    this.invalidBankTransfer.processPayment();
    console.log("Processing invalid Digital Wallet payment: ");
    this.invalidDigitalWallet.processPayment();
  }

  private refundPayments() {
    console.log("Refunding valid Credit Card payment: ");
    this.validCreditCard.refundPayment();
    console.log("Refunding valid Bank Transfer payment: ");
    this.validBankTransfer.refundPayment();
    console.log("Refunding valid Digital Wallet payment: ");
    this.validDigitalWallet.refundPayment();

    console.log("\nRefunding invalid Credit Card payment: ");
    this.invalidCreditCard.refundPayment();
    console.log("Refunding invalid Bank Transfer payment: ");
    this.invalidBankTransfer.refundPayment();
    console.log("Refunding invalid Digital Wallet payment: ");
    this.invalidDigitalWallet.refundPayment();
  }
}

new Main().start();
