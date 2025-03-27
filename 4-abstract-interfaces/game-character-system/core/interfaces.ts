import type { BaseEntity } from "./classes";

export interface Healing {
  heal(): void;
}

export interface Defend {
  getIsDefending(): boolean;
  setIsDefending(value: boolean): void;
  defend(): void;
}

export interface Attack {
  getAttackAmount(): number;
  setAttackAmount(value: number): void;
  attack(entity: BaseEntity & Defend): void;
}

export interface HealOther extends Healing {
  healOther(entity: BaseEntity): void;
}
