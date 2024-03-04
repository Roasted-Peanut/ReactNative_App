import { createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../repositories/userRepo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import configs from "../../constants/configs";

// First, create the thunk
export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId: string, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

// second, create the Redux tookit query
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
