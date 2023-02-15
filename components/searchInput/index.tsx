/** @format */

import React from "react"
import Image from "next/image"
import styles from "./SearchInput.module.scss"

const SearchInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ ...inputProps }) => {
  return (
    <div className={styles.textfield}>
      <div className={styles.input}>
        <div className={styles.input_adornment}>
          <Image src="/Search.svg" alt="Search" width="20" height="20" />
        </div>
        <input
          placeholder="Search Product"
          className={styles.input_field}
          {...inputProps}
        />
      </div>
    </div>
  )
}

export default SearchInput
