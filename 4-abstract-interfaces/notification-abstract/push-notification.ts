import { Notification } from "./notification";

export class PushNotification extends Notification {
  public constructor(private deviceToken: string, message: string) {
    super(message);
  }

  public send(): void {
    console.log(
      `Sending Push Notification to ${this.deviceToken}: ${this.message}`
    );
  }
}
