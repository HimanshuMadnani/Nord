
export const emailOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2ddec9392fmsha06b40f602ba955p1b8658jsn21cb7c87bc57',
        'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
    },
};

export const fetchData = async (url, options) =>
{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}