import { v4 } from "uuid"

export class idGenerator {
    public generateId = (): string => v4()
}