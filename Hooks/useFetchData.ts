import useSWR from 'swr'
import fetcher from '../library/fetcher'

// hook to fetch data from the server and return the data and the error if any
export function useFetchData<JSON = any>(endpoint: string) {
    const { data, error } = useSWR<JSON>(`http://54.169.31.224:3000/${endpoint}`, fetcher)

    return { data, error }
}

