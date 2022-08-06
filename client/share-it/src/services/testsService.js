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

const request = await  fetch(`${baseUrl}`)
 
const res =  await request.json();
  
    return res;
    
    
    
}   

export const getOneById = async (id) => {

    const request =
    await fetch(`${baseUrl}/edit/${id}`);

const response = await request.json();

return response;
}