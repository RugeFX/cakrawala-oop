import { Notification } from "./notification";

export class EmailNotification extends Notification {
  public constructor(private recipient: string, message: string) {
    super(message);
  }

  public send(): void {
    console.log(`Sending Email to ${this.recipient}: ${this.message}`);
  }
}
