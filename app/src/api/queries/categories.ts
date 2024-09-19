// // Define the interfaces for the API response
// interface Address {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   }

//   interface Company {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   }

//   interface ApiResponse {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: Address;
//     phone: string;
//     website: string;
//     company: Company;
//   }

//   // Define the user data type we want in our application
//   interface User {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
//   }

// // Function to map the API response to our User interface
// const mapApiResponseToUser = (apiResponse: ApiResponse): User => {
//     return {
//       id: apiResponse.id,
//       name: apiResponse.name,
//       email: apiResponse.email,
//       phone: apiResponse.phone,
//     };
//   };

// Function to fetch user data and map it to the User interface

const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const apiResponse: string[] = await response.json();
  return apiResponse;
};
export default fetchCategories;
