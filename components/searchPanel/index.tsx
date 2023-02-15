/** @format */

import React from "react"
import SearchHistoryItem from "@/components/searchHistoryItem"
import useSearchHistory from "@/hooks/useSearchHistory"
import styles from "./SearchPanel.module.scss"

interface SearchPanelProps {
  variant: "popular" | "history"
  items: string[]
  onItemSelect: (searchKey: string) => void
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  variant = "history",
  items,
  onItemSelect,
}) => {
  const history = useSearchHistory()

  return (
    <div className={styles.search_panel}>
      <div className={styles.toolbar}>
        <p>{variant === "history" ? "Recent" : "Popular"} Searches</p>
        <p
          role="button"
          className={styles.clear_button}
          onClick={() => history.clearAll()}
        >
          {variant === "history" ? "Clear All" : ""}
        </p>
      </div>
      <div className={styles.divider} />
      <div>
        {items.map((searchKey) => (
          <SearchHistoryItem
            key={searchKey}
            canRemove={variant === "history"}
            name={searchKey}
            onClick={onItemSelect}
            onClose={(searchKey) => history.clear(searchKey)}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchPanel
