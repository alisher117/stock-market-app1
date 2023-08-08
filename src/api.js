const API_URL = 'https://REACT.iex.cloud/v1/data/REACT/DATASET_MIJYYRTFL?last=50&token=sk_cb33e9bec0c443039c87d6da3fe3276a'; 

export const fetchStockData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
