// import { useState, useEffect } from 'react';
// import { get } from '../../../lib/axios';
// import { GET_USER_BY_ID } from '../../../data/constants';

// const useGetUserDetails = (userId) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await get(GET_USER_BY_ID, { userId });
//         setUser(userData);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [userId]);

//   return { user, error, isLoading };
// };

// export default useGetUserDetails;
