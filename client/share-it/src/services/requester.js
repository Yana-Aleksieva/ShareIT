

export const requester = async (method, url, data) => {

    let request;
    if (method === 'GET') {

        request = fetch(url);
        const response = await request;
        return response;
    } else {

        try {
            request = await fetch(url, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const response = await request.json();

            return response;
        } catch (error) {


            throw new Error(error);
            // return <h1>{error}</h1>
        }


    }
}