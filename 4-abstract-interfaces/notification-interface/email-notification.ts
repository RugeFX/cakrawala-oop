import type { Notifiable } from "./notifiiable";

export class EmailNotification implements Notifiable {
  public constructor(private recipient: string, private message: string) {}

  public notificationType(): string {
    return "email";
  }

  public notify(): void {
    console.log(`Sending Email to ${this.recipient}: ${this.message}`);
  }
}
