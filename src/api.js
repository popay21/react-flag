

export const fetchCountryFlags = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
      throw new Error('Failed to fetch country flags');
  }
  const data = await response.json();
  return data;
};




  
       

