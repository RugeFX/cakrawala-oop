import { Healer, Mage, Warrior } from "./entities/players";

class GameCharacterSystemMain {
  public static main(): void {
    const mage = new Mage("Gandalf");
    const warrior = new Warrior("Aragorn");
    const healer = new Healer("Elrond");

    console.log(`${mage.getName()} initial health: ${mage.getCurrentHealth()}`);
    console.log(
      `${warrior.getName()} initial health: ${warrior.getCurrentHealth()}`
    );
    console.log(
      `${healer.getName()} initial health: ${healer.getCurrentHealth()}`
    );

    mage.attack(warrior);
    console.log(
      `${warrior.getName()} health after attack: ${warrior.getCurrentHealth()}`
    );

    warrior.defend();
    console.log(
      `${warrior.getName()} is defending: ${warrior.getIsDefending()}`
    );

    healer.healOther(warrior);
    console.log(
      `${warrior.getName()} health after healing: ${warrior.getCurrentHealth()}`
    );

    mage.heal();
    console.log(
      `${mage.getName()} health after healing: ${mage.getCurrentHealth()}`
    );
  }
}

GameCharacterSystemMain.main();
