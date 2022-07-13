import { validateCharacter } from "..";
import { Character } from "../types/Character";

describe("Testando Personagens", () => {
    test("Checa personagem com nome vazio", () => {
        const emptyName = validateCharacter({
            name: "",
            life: 100,
            strength: 50,
            defense: 200
        })
        expect(emptyName).toBe(false)
    })
})