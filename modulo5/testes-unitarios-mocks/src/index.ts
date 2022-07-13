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