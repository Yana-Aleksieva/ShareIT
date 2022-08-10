

export const getRandomQuote = () => {


let result;

const data = fetch('https://quotes.rest/qod')
	.then(response => response.json())


	
    console.log(data)
    return data;
}