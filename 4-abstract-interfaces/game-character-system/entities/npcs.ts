import { BaseEntity, NPC } from "../core/classes";
import type { HealOther } from "../core/interfaces";

export class Merchant extends NPC implements HealOther {
  public constructor(name: string) {
    super(name, 0, 50);
  }

  public heal(): void {
    console.log(`${this.getName()} is healing`);
  }

  public healOther(entity: BaseEntity): void {
    console.log(`${this.getName()} is healing ${entity.getName()}`);
    entity.setCurrentHealth(entity.getCurrentHealth() + this.healAmount);
  }

  public sellItem(item: string): void {
    console.log(`${this.getName()} is selling ${item}`);
  }
}

export class QuestGiver extends NPC {
  public constructor(name: string) {
    super(name, 0, 40);
  }

  public heal(): void {
    console.log(`${this.getName()} is healing`);
    this.currentHealth += 10;
  }

  public giveQuest(quest: string): void {
    console.log(`${this.getName()} is giving you the quest: ${quest}`);
  }
}
