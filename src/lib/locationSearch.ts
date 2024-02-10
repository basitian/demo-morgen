export const suggestLocations = async (searchTerm: string) => {
  const searchResults = await fetch(
    `https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchTerm}&language=de&session_token=${'123'}&access_token=${
      process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN
    }`
  );
  const data = await searchResults.json();
  console.log(data);
  return data.suggestions;
};
