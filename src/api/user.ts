import { IUserSelf } from "src/interfaces/user.interfaces"

export const userSelf = async (): Promise<IUserSelf> => {
    return {
        user: {
            name: 'John doe'
        }
    }
}