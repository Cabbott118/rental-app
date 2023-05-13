import { POST_USER, GET_USER, PATCH_USER } from '../../data/constants';
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
      query: (userId, { legalName, address, phoneNumber }) => ({
        url: `${PATCH_USER}/${userId}`,
        method: 'PATCH',
        body: { legalName, address, phoneNumber },
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
