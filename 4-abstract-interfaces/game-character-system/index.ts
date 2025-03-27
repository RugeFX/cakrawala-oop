import { Healer, Mage, Warrior } from "./entities/players";
import { Goblin, Dragon } from "./entities/enemies";
import { Merchant, QuestGiver } from "./entities/npcs";

class GameCharacterSystemMain {
  public static main(): void {
    const mage = new Mage("Zacky");
    const warrior = new Warrior("Anggara");
    const healer = new Healer("Ariel");

    const merchant = new Merchant("Rafael");
    const questGiver = new QuestGiver("Rizky");

    const goblin = new Goblin("Goblin Warrior");
    const dragon = new Dragon("Fire Dragon");

    console.log(`${mage.getName()} initial health: ${mage.getCurrentHealth()}`);
    console.log(
      `${warrior.getName()} initial health: ${warrior.getCurrentHealth()}`
    );
    console.log(
      `${healer.getName()} initial health: ${healer.getCurrentHealth()}`
    );

    goblin.attack(warrior);
    console.log(
      `${warrior.getName()} health after goblin attack: ${warrior.getCurrentHealth()}`
    );

    dragon.attack(mage);
    console.log(
      `${mage.getName()} health after dragon attack: ${mage.getCurrentHealth()}`
    );

    warrior.defend();
    console.log(
      `${warrior.getName()} is defending: ${warrior.getIsDefending()}`
    );

    merchant.healOther(warrior);
    console.log(
      `${warrior.getName()} health after merchant healing: ${warrior.getCurrentHealth()}`
    );

    healer.healOther(mage);
    console.log(
      `${mage.getName()} health after healer healing: ${mage.getCurrentHealth()}`
    );

    questGiver.giveQuest("Defeat the Goblin King!");

    mage.heal();
    console.log(
      `${mage.getName()} health after healing: ${mage.getCurrentHealth()}`
    );
  }
}

GameCharacterSystemMain.main();
