// function for the two letters in fullname

export const getInitials = (fullName: string) => {
    const nameArr = fullName.split("");
    let initials = nameArr.filter(char => {
        return /[A-Z]/.test(char);
    });
    return initials.join("");
};
