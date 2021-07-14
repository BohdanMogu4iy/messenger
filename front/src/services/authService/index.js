const storage = window.localStorage

const authService = {
    getToken: () => {
        return storage.getItem("token")
    },
    setToken: token => {
        storage.setItem("token", token)
    },
    deleteToken: () => {
        storage.removeItem("token")
    },
    getSession: () => {
        return storage.getItem("session")
    },
    setSession: session => {
        storage.setItem("session", session)
    },
    deleteSession: () => {
        storage.removeItem("session")
    },
    clearAll: () => {
        storage.clear()
    }
}

export default authService