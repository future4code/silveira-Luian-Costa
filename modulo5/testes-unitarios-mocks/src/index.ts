import { Character } from "./types/Character";

export function validateCharacter(input: Character): boolean {
    if (!input.name || !input.defense || !input.life || !input.strength) {
        return false
    }
    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false
    }
    return true
}

export function performAttack(attacker: Character, defender: Character, validator: (input: Character) => boolean) {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }
    if (attacker.strength > defender.defense) {
        defender.life - attacker.strength
    }
}