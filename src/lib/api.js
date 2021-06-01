const baseUrl = 'https://quotsagram-166d7-default-rtdb.firebaseio.com/';

export async function getAllQuotes() {
    const response = await fetch(`${baseUrl}/quotes.json`);
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes...');
    }

    const transformedQuotes = [];

    for(const key in data) {
        const quoteObj = {
            id: key,
            ...data[key]
        };

        transformedQuotes.push(quoteObj);
    }

    return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
    const response = await fetch(`${baseUrl}/quotes/${quoteId}.json`);
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch the quote...');
    }

    const loadedQuote = {
        id: quoteId,
        ...data
    };

    return loadedQuote;
}

export async function addQuote(quoteData) {
    const response = await fetch(`${baseUrl}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(quoteData),
        headers: 'application/json'
    });
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Could not create the quote...');
    }

    return null;
}