/** @format */

import React, { useEffect } from "react"
import SearchHistoryItem from "@/components/searchHistoryItem"
import useSearchHistory from "@/hooks/useSearchHistory"
import styles from "./SearchPanel.module.scss"
import useKeyPress from "@/hooks/useKeyPress"
import useSelectSearchItem from "@/hooks/useSelectSearchItem"

interface SearchPanelProps {
  loading: boolean
  variant: "popular" | "history"
  items: string[]
  onItemSelect: (searchKey: string) => void
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  loading,
  variant,
  items,
  onItemSelect,
}) => {
  const history = useSearchHistory()
  const arrowUpPressed = useKeyPress("ArrowUp")
  const arrowDownPressed = useKeyPress("ArrowDown")
  const { selectedItem, handleArrowDown, handleArrowUp, deselect } =
    useSelectSearchItem(items.length)

  useEffect(() => {
    return () => {
      deselect()
    }
  }, [])

  useEffect(() => {
    if (arrowDownPressed) {
      handleArrowDown()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowDownPressed])

  useEffect(() => {
    if (arrowUpPressed) {
      handleArrowUp()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowUpPressed])

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
      {!loading && (
        <div>
          {items.map((searchKey, index) => (
            <SearchHistoryItem
              key={searchKey}
              selected={index === selectedItem}
              canRemove={variant === "history"}
              name={searchKey}
              onClick={onItemSelect}
              onClose={(searchKey) => history.clear(searchKey)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPanel
