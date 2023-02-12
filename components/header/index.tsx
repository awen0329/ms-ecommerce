/** @format */

import Image from "next/image"
import React from "react"
import SearchInput from "@/components/searchInput"
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.menu_icon}
        src="/Menu.svg"
        alt="Menu"
        height="24"
        width="24"
      />
      <SearchInput />
    </div>
  )
}
