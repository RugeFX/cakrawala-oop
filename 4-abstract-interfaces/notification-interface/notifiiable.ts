export interface Notifiable {
  notify(): void;
  notificationType(): string;
}
