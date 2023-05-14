export const exerciseOptions: { method: string, headers: { "X-RapidAPI-Key": string, "X-RapidAPI-Host": string } } = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e2142c4af1msh74d395c3c7a9d31p17847ejsn6f1482cffcce",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  
  export const fetchData = async (url: string, options: { method: string, headers: { "X-RapidAPI-Key": string, "X-RapidAPI-Host": string } }) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };
  
  export const youtubeOptions: { method: string, headers: { "X-RapidAPI-Key": string, "X-RapidAPI-Host": string } } = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e2142c4af1msh74d395c3c7a9d31p17847ejsn6f1482cffcce",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };