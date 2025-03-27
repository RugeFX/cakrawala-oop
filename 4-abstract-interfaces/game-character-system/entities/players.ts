import { BaseEntity, Player } from "../core/classes";
import type { Defend, HealOther } from "../core/interfaces";

export class Mage extends Player implements HealOther {
  public constructor(name: string) {
    super(name, 80, 10, 50);
  }

  public heal(): void {
    console.log(`${this.name} is healing`);
    this.currentHealth += this.healAmount;
  }

  public healOther(entity: BaseEntity): void {
    console.log(`${this.name} is healing ${entity.getName()}`);
    entity.setCurrentHealth(entity.getCurrentHealth() + this.healAmount);
  }

  public attack(entity: BaseEntity & Defend): void {
    if (entity.getIsDefending()) {
      console.log(`${this.name} blocked the attack`);
      entity.setIsDefending(false);
    } else {
      console.log(`${this.name} is attacking ${entity.getName()}`);
      entity.setCurrentHealth(entity.getCurrentHealth() - this.attackAmount);
    }
  }
  public defend(): void {
    console.log(`${this.name} is defending`);
    this.isDefending = true;
  }
}

export class Warrior extends Player {
  public constructor(name: string) {
    super(name, 100, 5, 100);
  }

  public heal(): void {
    console.log(`${this.name} is healing`);
    this.currentHealth += this.healAmount;
  }

  public attack(entity: BaseEntity & Defend): void {
    if (entity.getIsDefending()) {
      console.log(`${this.name} blocked the attack`);
      entity.setIsDefending(false);
    } else {
      console.log(`${this.name} is attacking ${entity.getName()}`);
      entity.setCurrentHealth(entity.getCurrentHealth() - this.attackAmount);
    }
  }

  public defend(): void {
    console.log(`${this.name} is defending`);
    this.isDefending = true;
  }
}

export class Healer extends Player implements HealOther {
  public constructor(name: string) {
    super(name, 30, 25, 50);
  }

  public heal(): void {
    console.log(`${this.name} is healing`);
    this.currentHealth += this.healAmount;
  }

  public healOther(entity: BaseEntity): void {
    console.log(`${this.name} is healing ${entity.getName()}`);
    entity.setCurrentHealth(entity.getCurrentHealth() + this.healAmount);
  }

  public attack(entity: BaseEntity & Defend): void {
    if (entity.getIsDefending()) {
      console.log(`${this.name} blocked the attack`);
      entity.setIsDefending(false);
    } else {
      console.log(`${this.name} is attacking ${entity.getName()}`);
      entity.setCurrentHealth(entity.getCurrentHealth() - this.attackAmount);
    }
  }

  public defend(): void {
    console.log(`${this.name} is defending`);
    this.isDefending = true;
  }
}
