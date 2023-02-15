/** @format */

import { GetStaticPaths, GetStaticProps, NextPage } from "next"

import ProductCard from "@/components/productCard"
import apiClient from "@/lib/client"
import { IGetProductsResponse } from "@/lib/types/product"
import styles from "@/styles/Kategory.module.scss"

const Kategori: NextPage<{ products: IGetProductsResponse }> = ({
  products,
}) => {
  return (
    <>
      <p className={styles.title}>Find your favorite products now.</p>
      <div className={styles.tabbar}>
        <span className={styles.selected}>Trendy foods</span>
        <span>Bread</span>
        <span>Milk</span>
        <span>Egg</span>
      </div>
      <div className={styles.products}>
        {products?.payload.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Kategori

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "kategori" } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug

  const data = await apiClient.post("/slug", {
    slug: `/${slug}`,
    query: {},
  })

  return {
    props: {
      products: data.data,
    },
  }
}
