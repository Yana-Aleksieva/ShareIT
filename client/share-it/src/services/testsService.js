const baseUrl = 'http://localhost:3030/tests';


export const createTest = async (data) => {

    const request =
        await fetch(`${baseUrl}/create`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

    const response = await request.json();

    return response;
}

export const getAll = async () => {

    const request = await fetch(`${baseUrl}`)
    const result = await request.json();
    return result;
}

export const getOneById = async (id) => {


    return await fetch(`${baseUrl}/edit/${id}`)
        .then(result => result.json())


}


export const edit = async (id, data) => {

    const request =
        await fetch(`${baseUrl}/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

    const response = await request.json();


}

export const deleteTest = async (id) => {


    const request =
        await fetch(`${baseUrl}/delete/${id}`, {
            method: 'DELETE',

        });

    const response = await request.json();
    return response;
}

export const generateQuestion = async () => {

    const request = await fetch('https://the-trivia-api.com/api/questions?categories=music&limit=1&difficulty=easy')
const response = await request.json();
return response;
    
    
    

  
}