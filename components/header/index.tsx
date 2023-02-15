/** @format */

import Image from "next/image"
import React, { ChangeEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"

import SearchPanel from "@/components/searchPanel"
import SearchInput from "@/components/searchInput"

import useSearchHistory from "@/hooks/useSearchHistory"
import useGetSuggestions from "@/hooks/useGetSuggestions"
import useKeyPress from "@/hooks/useKeyPress"
import useSelectSearchItem from "@/hooks/useSelectSearchItem"
import styles from "./Header.module.scss"

export default function Header() {
  const [searchKey, setSearchKey] = useState<string>("")
  const [typing, setTyping] = useState<boolean>(false)
  const [searchPanelOpen, setSearchPanelOpen] = useState<boolean>(false)
  const [suggestedKeys, setSuggestedKeys] = useState<any[]>([])

  const router = useRouter()
  const history = useSearchHistory()
  const enterPressed = useKeyPress("Enter")
  const { deselect, selectedItem } = useSelectSearchItem()

  const { loading, data } = useGetSuggestions(searchKey)

  useEffect(() => {
    setSearchKey((router.query.q as string) || "")
  }, [router.query])

  useEffect(() => {
    if (typing && !loading && data) {
      setSuggestedKeys(data.suggestions.map(({ text }) => text))
    }
  }, [typing, loading, data])

  useEffect(() => {
    if (enterPressed) {
      let key = ""
      if (selectedItem > -1) {
        key = (typing ? suggestedKeys : history.history)[selectedItem]
      } else {
        key = searchKey
      }
      if (key) {
        history.push(key)
      }
      setTyping(false)
      setSearchPanelOpen(false)
      router.push(`/kategori?q=${key}`)
    }
  }, [enterPressed])

  const handleFocus = () => {
    setSearchPanelOpen(true)
    deselect()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value)
    setTyping(true)
    setSearchPanelOpen(true)
  }

  const handleItemSelect = (searchKey: string) => {
    router.push(`/kategori?q=${searchKey}`)
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <Image
            style={{ display: searchPanelOpen ? "none" : "block" }}
            src="/Menu.svg"
            alt="Menu"
            height="24"
            width="24"
          />
          <SearchInput
            value={searchKey}
            onChange={handleChange}
            onFocus={() => handleFocus()}
            onClick={() => handleFocus()}
          />
        </div>
      </header>
      {searchPanelOpen && (
        <SearchPanel
          loading={loading}
          variant={typing ? "popular" : "history"}
          items={typing ? suggestedKeys : history.history}
          onItemSelect={handleItemSelect}
        />
      )}
    </>
  )
}
