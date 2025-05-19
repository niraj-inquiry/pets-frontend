import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/user/register-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    getProfile: builder.query({
      query: () => ({
        url: "/user/get-user-profile",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user/update-user-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "PATCH",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useRegisterUserMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useLogoutMutation,
} = authApi;
