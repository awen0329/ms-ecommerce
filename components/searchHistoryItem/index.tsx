/** @format */

import React, { KeyboardEvent } from "react"
import Image from "next/image"
import styles from "./SearchHistoryItem.module.scss"

interface SearchHistoryItemProps {
  name: string
  selected: boolean
  onClick: (name: string) => void
  onClose: (name: string) => void
  canRemove?: boolean
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  name,
  selected,
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

  const handleEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(name)
    e.preventDefault()
    e.stopPropagation()
    if (selected && e.key === "Enter") {
      onClick(name)
    }
  }

  return (
    <div
      className={`${styles.history_item} ${selected ? styles.selected : ""}`}
      onKeyDown={handleEnter}
    >
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
