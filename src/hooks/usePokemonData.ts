import axios, { type AxiosPromise } from "axios"
import {useQuery} from "@tanstack/react-query"
import type { PokemonData } from "../interface/PokemonData";

const API_URL = "http://localhost:8080";

const fetchData = async(): AxiosPromise<PokemonData[]> => {
    const response = axios.get(API_URL + '/pokemons')
    return response;
}

export function usePokemonData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['pokemon-data'],
        retry: 2
    })

    return{
        ...query, 
        data: query.data?.data
    }
}