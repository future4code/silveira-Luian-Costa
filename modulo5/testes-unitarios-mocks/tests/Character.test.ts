import { performAttack, validateCharacter } from "../src";
import { Character } from "../src/types/Character";

describe("Testando Personagens", () => {
    test("Checa personagem com nome vazio", () => {
        const character = validateCharacter({
            name: "",
            life: 100,
            strength: 50,
            defense: 200
        })
        expect(character).toBe(false)
    })

    test("Checa personagem vida igual a 0", () => {
        const character = validateCharacter({
            name: "Ryu",
            life: 0,
            strength: 50,
            defense: 200
        })
        expect(character).toBe(false)
    })

    test("Checa personagem com força igual a zero", () => {
        const character = validateCharacter({
            name: "Ken",
            life: 100,
            strength: 0,
            defense: 200
        })
        expect(character).toBe(false)
    })

    test("Checa personagem com defesa igual a zero", () => {
        const character = validateCharacter({
            name: "Zangief",
            life: 100,
            strength: 50,
            defense: 0
        })
        expect(character).toBe(false)
    })

    test("Checa personagem com atributo negativo", () => {
        const character = validateCharacter({
            name: "Bison",
            life: 100,
            strength: 50,
            defense: -50
        })
        expect(character).toBe(false)
    })

    test("Checa personagem com atributos válidos", () => {
        const character = validateCharacter({
            name: "Blanka",
            life: 150,
            strength: 200,
            defense: 100
        })
        expect(character).toBe(true)
    })
})

describe("Testando performAttack", () => {
    test("Creating mocks", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
        const attacker: Character = {
            name: "Ryu",
            life: 100,
            defense: 99,
            strength: 300
        };

        const defender: Character = {
            name: "Bison",
            life: 150,
            defense: 120,
            strength: 500
        };
        performAttack(attacker, defender, validatorMock)
    })

    test("Sucesso no ataque", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
        const attacker: Character = {
            name: "Ryu",
            life: 100,
            defense: 99,
            strength: 300
        };

        const defender: Character = {
            name: "Bison",
            life: 150,
            defense: 120,
            strength: 500
        };
        performAttack(attacker, defender, validatorMock)
    })

    test("Falha no ataque", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
        const attacker: Character = {
            name: "Ryu",
            life: 100,
            defense: 120,
            strength: 300
        };

        const defender: Character = {
            name: "Bison",
            life: 150,
            defense: 120,
            strength: 500
        };
        performAttack(attacker, defender, validatorMock)
    })
})