export abstract class Notification {
  public constructor(protected message: string) {}

  abstract send(): void;
}
