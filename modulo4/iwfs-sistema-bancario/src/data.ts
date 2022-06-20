export type userAccount = {
    name: string,
    cpf: string,
    dateOfBirth: string,
    balance: number,
    bankStatement: statementDetails[]
}

type statementDetails = {
    value: number,
    date: Date,
    description: string
}

export const usersAccounts: userAccount[] = []