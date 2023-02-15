/** @format */

import Image from "next/image"
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import SearchPanel from "@/components/searchPanel"
import SearchInput from "@/components/searchInput"
import useSearchHistory from "@/hooks/useSearchHistory"
import styles from "./Header.module.scss"
import useGetSuggestions from "@/hooks/useGetSuggestions"

export default function Header() {
  const router = useRouter()
  const [searchKey, setSearchKey] = useState<string>("")
  const [focus, setFocus] = useState<boolean>(false)
  const [typing, setTyping] = useState<boolean>(false)
  const [suggestedKeys, setSuggestedKeys] = useState<any[]>([])
  const history = useSearchHistory()
  const { loading, data } = useGetSuggestions(searchKey)

  useEffect(() => {
    if (typing && !loading && data) {
      setSuggestedKeys(data.suggestions.map(({ text }) => text))
    }
  }, [typing, loading, data])

  const handleFocus = () => {
    setFocus(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value)
    setTyping(true)
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchKey) {
        history.push(searchKey)
      }
      router.push(`/kategori?q=${searchKey}`)
      setFocus(false)
      setTyping(false)
    }
  }

  const handleItemSelect = (searchKey: string) => {
    router.push(`/kategori?q=${searchKey}`)
    setFocus(false)
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <Image
            className={styles.menu_icon}
            style={{ display: focus ? "none" : "block" }}
            src="/Menu.svg"
            alt="Menu"
            height="24"
            width="24"
          />
          <SearchInput
            value={searchKey}
            onChange={handleChange}
            onClick={() => handleFocus()}
            onKeyDown={handleEnter}
          />
        </div>
      </header>
      {focus && (
        <SearchPanel
          variant={typing ? "popular" : "history"}
          items={typing ? suggestedKeys : history.history}
          onItemSelect={handleItemSelect}
        />
      )}
    </>
  )
}
