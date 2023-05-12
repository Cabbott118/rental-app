import { GET_USER_BY_ID } from '../../data/constants';
import { api } from '../baseService';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (userId) => `${GET_USER_BY_ID}?userId=${userId}`,
    }),
    createUser: builder.mutation({
      query: ({ name, email }) => ({
        url: 'users',
        method: 'POST',
        body: { name, email },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, name, email }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: { name, email },
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),

  overrideExisting: false,
});

// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: API_URL,
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: (userId) => `${GET_USER_BY_ID}?userId=${userId}`,
//     }),
//     createUser: builder.mutation({
//       query: ({ name, email }) => ({
//         url: 'users',
//         method: 'POST',
//         body: { name, email },
//       }),
//     }),
//     updateUser: builder.mutation({
//       query: ({ id, name, email }) => ({
//         url: `users/${id}`,
//         method: 'PUT',
//         body: { name, email },
//       }),
//     }),
//     deleteUser: builder.mutation({
//       query: (id) => ({
//         url: `users/${id}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
