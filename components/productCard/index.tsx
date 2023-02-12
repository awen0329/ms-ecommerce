/** @format */

import Image from "next/image"
import styles from "./ProductCard.module.scss"
import { NextPage } from "next"
import { IProduct } from "@/lib/types/product"
import { getProductImageUrl, numberToCurrency } from "@/lib/utils"

interface ProductCardProps {
  product: IProduct
}

const ProductCard: NextPage<ProductCardProps> = ({ product }) => {
  const imageSrc = getProductImageUrl(product.image)

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={imageSrc || ""} alt={product.name} fill />
      </div>
      <div className={styles.product}>
        <p className={styles.product_name}>{product.name}</p>
        <p className={styles.product_brand}>{product.brand}</p>
        <p className={styles.product_price}>
          ${numberToCurrency(product.price)}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
