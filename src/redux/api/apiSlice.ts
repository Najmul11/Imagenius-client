import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (params) => ({
        url: `/categories?${new URLSearchParams(params).toString()}`,
        method: "Get",
      }),
    }),
    getAllUsers: builder.query({
      query: (params) => ({
        url: `/users?${new URLSearchParams(params).toString()}`,
        method: "Get",
      }),
      providesTags: ["users"],
    }),

    getAllImages: builder.query({
      query: (params) => ({
        url: `/images?${new URLSearchParams(params).toString()}`,
        method: "Get",
      }),
    }),
    getAllOrders: builder.query({
      query: (params) => ({
        url: `/orders?${new URLSearchParams(params).toString()}`,
        method: "Get",
      }),
    }),

    createUser: builder.mutation({
      query: (data) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
    }),

    userLogin: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
    }),
    makeAdmin: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/users/make-admin`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["users"],
    }),
    removeAdmin: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/users/remove-admin`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["users"],
    }),

    updateUser: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/users/update-profile`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["users"],
    }),
    changePassword: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/users/change-password`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/users/delete-user`,
        method: "DELETE",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["users"],
    }),

    getProfile: builder.query({
      query: (accessToken) => ({
        url: `/users/get-profile`,
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useCreateUserMutation,
  useGetProfileQuery,
  useGetAllCategoriesQuery,
  useGetAllUsersQuery,
  useGetAllImagesQuery,
  useGetAllOrdersQuery,
  useMakeAdminMutation,
  useRemoveAdminMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = api;
