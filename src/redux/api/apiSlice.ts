import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
  }),
  tagTypes: ["wishlist", "books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (queryParams) => ({
        url: `/books?${new URLSearchParams(queryParams).toString()}`,
        method: "GET",
      }),
      providesTags: ["books"],
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
      invalidatesTags: ["wishlist"],
    }),

    getProfile: builder.query({
      query: (accessToken) => ({
        url: `/users/get-profile`,
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
      }),
      providesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,

  useUserLoginMutation,
  useCreateUserMutation,
  useGetProfileQuery,
} = api;
