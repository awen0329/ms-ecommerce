/** @format */

import SelectSearchItemState from "@/states/selectSearchItem"
import { useRecoilState } from "recoil"

export default function useSelectSearchItem(length: number) {
  const [selectedItem, setSelectedItem] = useRecoilState(SelectSearchItemState)

  const handleArrowUp = () => {
    if (selectedItem > 0) {
      setSelectedItem(selectedItem - 1)
    } else {
      setSelectedItem(length - 1)
    }
  }

  const handleArrowDown = () => {
    if (selectedItem < length - 1) {
      setSelectedItem(selectedItem + 1)
    } else {
      setSelectedItem(0)
    }
  }

  return {
    selectedItem,
    handleArrowDown,
    handleArrowUp,
  }
}
