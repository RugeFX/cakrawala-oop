import type { Attack, Defend, Healing } from "./interfaces";

export abstract class BaseEntity {
  public constructor(
    protected name: string,
    protected maxHealth: number,
    protected currentHealth: number = maxHealth
  ) {}

  public getName(): string {
    return this.name;
  }

  public getCurrentHealth(): number {
    return this.currentHealth;
  }

  public setCurrentHealth(value: number): void {
    this.currentHealth = value < 0 ? 0 : value > 100 ? 100 : value;
  }

  public getMaxHealth(): number {
    return this.maxHealth;
  }
}

export abstract class Player
  extends BaseEntity
  implements Healing, Attack, Defend
{
  protected isDefending: boolean = false;

  public constructor(
    name: string,
    protected attackAmount: number,
    protected healAmount: number,
    maxHealth: number,
    currentHealth?: number
  ) {
    super(name, maxHealth, currentHealth);
  }

  public getIsDefending(): boolean {
    return this.isDefending;
  }

  public setIsDefending(value: boolean): void {
    this.isDefending = value;
  }

  public getAttackAmount(): number {
    return this.attackAmount;
  }

  public setAttackAmount(value: number): void {
    this.attackAmount = value;
  }

  public getHealAmount(): number {
    return this.healAmount;
  }

  public setHealAmount(value: number): void {
    this.healAmount = value;
  }

  public abstract heal(): void;
  public abstract attack(entity: BaseEntity & Defend): void;
  public abstract defend(): void;
}

export abstract class Enemy extends BaseEntity implements Attack, Defend {
  protected isDefending: boolean = false;

  public constructor(
    name: string,
    protected attackAmount: number,
    maxHealth: number,
    currentHealth?: number
  ) {
    super(name, maxHealth, currentHealth);
  }

  public getIsDefending(): boolean {
    return this.isDefending;
  }

  public setIsDefending(value: boolean): void {
    this.isDefending = value;
  }

  public getAttackAmount(): number {
    return this.attackAmount;
  }

  public setAttackAmount(value: number): void {
    this.attackAmount = value;
  }

  public abstract attack(entity: BaseEntity & Defend): void;
  public abstract defend(): void;
}

export abstract class NPC extends BaseEntity implements Healing {
  public constructor(
    name: string,
    protected healAmount: number,
    maxHealth: number,
    currentHealth?: number
  ) {
    super(name, maxHealth, currentHealth);
  }

  public abstract heal(): void;
}
