const storage = window.localStorage

const storageService = {
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
    getUserId: () => {
        return storage.getItem("user")
    },
    setUserId: user => {
        storage.setItem("user", user)
    },
    deleteUserId: () => {
        storage.removeItem("user")
    },
    clearAll: () => {
        storage.clear()
    }
}

export default storageService