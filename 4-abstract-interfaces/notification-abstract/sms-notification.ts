import { Notification } from "./notification";

export class SMSNotification extends Notification {
  public constructor(private phoneNumber: string, message: string) {
    super(message);
  }

  public send(): void {
    console.log(`Sending SMS to ${this.phoneNumber}: ${this.message}`);
  }
}
