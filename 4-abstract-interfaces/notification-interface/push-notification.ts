import type { Notifiable } from "./notifiiable";

export class PushNotification implements Notifiable {
  public constructor(private deviceToken: string, private message: string) {}

  public notificationType(): string {
    return "push";
  }

  public notify(): void {
    console.log(
      `Sending Push Notification to ${this.deviceToken}: ${this.message}`
    );
  }
}
