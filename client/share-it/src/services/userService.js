import { requester } from "./requester.js"

export const register =  (method, url, data) => {

return  requester(method, url, data)


}

export const logout = () => {
const url = 'http://localhost:3030/data/users/logout'
    return requester('GET', url)
}

export const editProfile = async (id, data) => {

    const url = `http://localhost:3030/data/users/edit`;
    const request =
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

    const response = await request.json();

}

export const retrieveAvatar = async (id) => {

 
    const request =
        await fetch(`https://api.lorem.space/image/movie?w=150&h=220`)
      

    const response = await request.json();

}
