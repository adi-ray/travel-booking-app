// Toggle between local and production URLs
// export const BASE_URL= 'http://localhost:4000/api/v1'
export const BASE_URL = "https://travel-booking-backend-uvn3.onrender.com/api/v1";

// Helper function to get token from localStorage
export const getToken = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const parsedUser = JSON.parse(user);
    return parsedUser.token;
  }
  return null;
};
