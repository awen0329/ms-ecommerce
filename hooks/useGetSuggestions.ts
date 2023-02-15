/** @format */

import apiClient from "@/lib/client"
import { ISuggestions } from "@/lib/types/suggestions"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"

export default function useGetSuggestions(searchKey: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<ISuggestions>()
  const [error, setError] = useState<string>()

  const getSuggestions = async (searchKey: string) => {
    setLoading(true)
    try {
      const data = await apiClient.get(`/autocomplete?query=${searchKey}`)
      setData(data.data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getSuggestions(searchKey)
  }, [searchKey])

  return { loading, data, error }
}
