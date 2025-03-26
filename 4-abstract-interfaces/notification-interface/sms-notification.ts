import type { Notifiable } from "./notifiiable";

export class SMSNotification implements Notifiable {
  public constructor(private phoneNumber: string, private message: string) {}

  public notificationType(): string {
    return "sms";
  }

  public notify(): void {
    console.log(`Sending SMS to ${this.phoneNumber}: ${this.message}`);
  }
}
