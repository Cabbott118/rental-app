import { POST_USER, GET_USER } from '../../data/constants';
import { api } from '../baseService';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (userId) => `${GET_USER}/${userId}`,
    }),
    createUser: builder.mutation({
      query: ({ email, uid }) => ({
        url: POST_USER,
        method: 'POST',
        body: { email, uid },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, name, email }) => ({
        url: `user/${id}`,
        method: 'PATCH',
        body: { name, email },
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `user/${id}`,
        method: 'DELETE',
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
