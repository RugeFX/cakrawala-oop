import { BaseEntity, Enemy } from "../core/classes";
import type { Defend } from "../core/interfaces";

export class Goblin extends Enemy {
  public constructor(name: string) {
    super(name, 15, 30);
  }

  public attack(entity: BaseEntity & Defend): void {
    console.log(`${this.getName()} is attacking ${entity.getName()}`);
    entity.setCurrentHealth(entity.getCurrentHealth() - this.getAttackAmount());
  }

  public defend(): void {
    console.log(`${this.getName()} is defending`);
    this.setIsDefending(true);
  }
}

export class Dragon extends Enemy {
  public constructor(name: string) {
    super(name, 50, 100);
  }

  public attack(entity: BaseEntity & Defend): void {
    console.log(`${this.getName()} is attacking ${entity.getName()}`);
    entity.setCurrentHealth(entity.getCurrentHealth() - this.getAttackAmount());
  }

  public defend(): void {
    console.log(`${this.getName()} is defending`);
    this.setIsDefending(true);
  }
}
