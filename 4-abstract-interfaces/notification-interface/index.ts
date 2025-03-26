import { EmailNotification } from "./email-notification";
import type { Notifiable } from "./notifiiable";
import { PushNotification } from "./push-notification";
import { SMSNotification } from "./sms-notification";

class NotificationMain {
  private notification?: Notifiable;

  public constructor(public message: string) {}

  public useSMS(phoneNumber: string): void {
    this.notification = new SMSNotification(phoneNumber, this.message);
  }

  public useEmail(recipient: string): void {
    this.notification = new EmailNotification(recipient, this.message);
  }

  public usePush(deviceToken: string): void {
    this.notification = new PushNotification(deviceToken, this.message);
  }

  public sendNotification(): void {
    if (!this.notification) return console.error("Notification is not set!");
    this.notification.notify();
  }
}

function main() {
  const notificationMain = new NotificationMain("Hello, World!");

  notificationMain.useSMS("081234567890");
  notificationMain.sendNotification();

  notificationMain.useEmail("zacky@rugefx.com");
  notificationMain.sendNotification();

  notificationMain.usePush("1234567890");
  notificationMain.sendNotification();
}

main();
