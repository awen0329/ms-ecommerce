/** @format */

import SearchHistoryState from "@/states/searchHistory"
import { useRecoilState } from "recoil"

export default function useSearchHistory() {
  const [history, setHistory] = useRecoilState(SearchHistoryState)

  const push = (searchKey: string) => {
    setHistory((history) => {
      const temp = [...history]
      if (!temp.includes(searchKey)) {
        temp.push(searchKey)
        temp.sort()
      }
      return [...temp]
    })
  }

  const clear = (searchKey: string) => {
    setHistory((history) => history.filter((h) => h !== searchKey).sort())
  }

  const clearAll = () => {
    setHistory([])
  }

  return {
    history,
    push,
    clear,
    clearAll,
  }
}
