import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "producttsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003/" }),
    endpoints: (builder) => ({
        getAllOroducts: builder.query({
            query: () => "product"
        })
    })
})

export const { useGetAllProductsQuery } = productsApi;