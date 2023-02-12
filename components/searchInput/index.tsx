/** @format */

import React, { useRef, useState } from "react"
import Image from "next/image"
import styles from "./SearchInput.module.scss"

export default function SearchInput() {
  const inputEl = useRef<HTMLInputElement>(null)
  const [blur, setBlur] = useState(false)

  return (
    <div className={styles.textfield}>
      <div
        className={`${styles.input} ${blur && "input-focused"}`}
        onClick={() => {
          inputEl.current && inputEl.current.focus()
        }}
      >
        <div className={styles.input_adornment}>
          <Image src="/Search.svg" alt="Search" width="20" height="20" />
        </div>
        <input
          ref={inputEl}
          placeholder="Search Product"
          className={styles.input_field}
          onFocus={() => setBlur(!blur)}
          onBlur={() => setBlur(false)}
        />
      </div>
    </div>
  )
}
