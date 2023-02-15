/** @format */

import React, { useImperativeHandle, useRef } from "react"
import Image from "next/image"
import styles from "./SearchInput.module.scss"

interface IImperativeHandler {
  blur: () => void
}

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

// eslint-disable-next-line react/display-name
const SearchInput = React.forwardRef<IImperativeHandler, Props>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    function inputBlured() {
      inputRef.current?.blur()
    }

    useImperativeHandle(ref, () => {
      return {
        blur: inputBlured,
      }
    })

    return (
      <div className={styles.textfield}>
        <div className={styles.input}>
          <div className={styles.input_adornment}>
            <Image src="/Search.svg" alt="Search" width="20" height="20" />
          </div>
          <input ref={inputRef} className={styles.input_field} {...props} />
        </div>
      </div>
    )
  }
)

export default SearchInput
