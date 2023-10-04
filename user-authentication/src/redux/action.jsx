

export const authChecking = (flag) => {
    console.log(flag)
    return {
        type: "LOGGED_IN",
        payload: flag
    }
}