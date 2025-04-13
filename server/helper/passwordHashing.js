import bcryptjs from "bcryptjs";

const hashPassword = async(password) => {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(passwprd, salt);
    return hashedPassword;
}

const comparePasswords = async(plainPassword, hashedPassword) => {
    const isMatch = await bcryptjs.compare(plainPassword, hashedPassword);
    return isMatch;
};

export { hashPassword, comparePasswords };