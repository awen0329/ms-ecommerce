/** @format */

import Header from "@/components/header"
import ProductCard from "@/components/productCard"
import apiClient from "@/lib/client"
import { IGetProductsResponse } from "@/lib/types/product"
import styles from "@/styles/Home.module.scss"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/kategory", undefined, { shallow: true })
  }, [router])

  return null
}

export default Home
