import { EmailNotification } from "./email-notification";
import type { Notifiable } from "./notifiiable";
import { PushNotification } from "./push-notification";
import { SMSNotification } from "./sms-notification";

class NotificationMain {
  private notification?: Notifiable;

  public constructor(public message: string) {}

  public useSMS(phoneNumber: string): void {
    const smsNotification = new SMSNotification(phoneNumber, this.message);
    this.notification = smsNotification;
  }

  public useEmail(recipient: string): void {
    const emailNotification = new EmailNotification(recipient, this.message);
    this.notification = emailNotification;
  }

  public usePush(deviceToken: string): void {
    const pushNotification = new PushNotification(deviceToken, this.message);
    this.notification = pushNotification;
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
