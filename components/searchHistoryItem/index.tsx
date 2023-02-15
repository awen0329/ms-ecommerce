/** @format */

import React, { MouseEventHandler } from "react"
import Image from "next/image"
import styles from "./SearchHistoryItem.module.scss"

interface SearchHistoryItemProps {
  name: string
  onClick: (name: string) => void
  onClose: (name: string) => void
  canRemove?: boolean
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  name,
  onClick,
  onClose,
  canRemove,
}) => {
  const handleIconClick = () => {
    if (canRemove) {
      onClose(name)
    } else {
      onClick(name)
    }
  }

  return (
    <div className={styles.history_item}>
      <p onClick={() => onClick(name)}>{name}</p>
      <Image
        src={canRemove ? "/Close.svg" : "/Search.svg"}
        alt={canRemove ? "Remove history" : "Search"}
        width="18"
        height="18"
        onClick={() => handleIconClick()}
      />
    </div>
  )
}

export default SearchHistoryItem
