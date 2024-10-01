import bcrypt from "bcrypt"
export const CreateHash = async (password: string) => {
    const hash = await bcrypt.hash(password, 10);
    return hash

}
export const ComparePassword = async (password: string, hashPassword: string) => {
    const hash = await bcrypt.compare(password, hashPassword);
    return hash

}
