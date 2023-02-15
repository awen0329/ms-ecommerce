/** @format */

import { atom } from "recoil"

const SearchHistoryState = atom({
  key: "searchHistoryState",
  default: [] as string[],
})

export default SearchHistoryState
