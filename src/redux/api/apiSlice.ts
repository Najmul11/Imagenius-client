import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
  }),
  tagTypes: ["users", "user", "images", "orders"],
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
      providesTags: ["images"],
    }),
    getAllOrders: builder.query({
      query: (params) => ({
        url: `/orders?${new URLSearchParams(params).toString()}`,
        method: "Get",
      }),
      providesTags: ["orders"],
    }),
    getSingleImage: builder.query({
      query: (params) => ({
        url: `/images/${params}`,
        method: "Get",
      }),
      providesTags: ["images"],
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

    changePayment: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/users/change-payment`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["user"],
    }),

    updateProfile: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/users/update-profile`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["user"],
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
      invalidatesTags: ["user"],
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
      providesTags: ["user"],
    }),

    addImage: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/images/add-image`,
        method: "POST",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["images"],
    }),
    editImage: builder.mutation({
      query: ({ data, accessToken, imageId }) => ({
        url: `/images/${imageId}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["images"],
    }),
    deleteImage: builder.mutation({
      query: ({ accessToken, imageId }) => ({
        url: `/images/${imageId}`,
        method: "DELETE",
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["images"],
    }),
    createFeedback: builder.mutation({
      query: ({ payload, accessToken }) => ({
        url: `/feedback`,
        method: "POST",
        body: payload,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["images"],
    }),
    createOrder: builder.mutation({
      query: ({ payload, accessToken }) => ({
        url: `/orders/create-order`,
        method: "POST",
        body: payload,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["orders"],
    }),
    cancelOrder: builder.mutation({
      query: ({ orderId, accessToken }) => ({
        url: `/orders/cancel-order/${orderId}`,
        method: "PATCH",
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["orders"],
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
  useUpdateProfileMutation,
  useChangePaymentMutation,
  useChangePasswordMutation,
  useAddImageMutation,
  useEditImageMutation,
  useDeleteImageMutation,
  useGetSingleImageQuery,
  useCreateFeedbackMutation,
  useCreateOrderMutation,
  useCancelOrderMutation,
} = api;
