import { requester } from "./requester.js"

export const register =  (method, url, data) => {

return  requester(method, url, data)


}

export const logout = () => {
const url = 'http://localhost:3030/data/users/logout'
    return requester('GET', url)
}