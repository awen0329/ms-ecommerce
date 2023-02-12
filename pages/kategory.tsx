/** @format */

import { NextPage } from "next"
import Header from "@/components/header"
import ProductCard from "@/components/productCard"
import apiClient from "@/lib/client"
import { IGetProductsResponse } from "@/lib/types/product"
import styles from "@/styles/Kategory.module.scss"

const Kategory: NextPage<{ products: IGetProductsResponse }> = ({
  products,
}) => {
  return (
    <main className={styles.main}>
      <Header />
      <p className={styles.title}>Find your favorite products now.</p>
      <div className={styles.tabbar}>
        <span className="selected">Trendy foods</span>
        <span>Bread</span>
        <span>Milk</span>
        <span>Egg</span>
      </div>
      <div className={styles.products}>
        {products.payload.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Kategory

export const getStaticProps = async () => {
  const data = await apiClient.post("/slug", {
    slug: "/kategori",
    query: { q: "cocacola" },
  })

  return {
    props: {
      products: data.data,
    },
  }
}
