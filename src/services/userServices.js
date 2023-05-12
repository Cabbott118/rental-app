import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.example.com/',
    // Optionally include headers or other fetch options here
  }),
  endpoints: (builder) => ({
    // Define each endpoint as a separate function
    getUsers: builder.query({
      query: (count) => `users?count=${count}`,
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
});

// Export each endpoint as a separate variable
export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = userApi;
