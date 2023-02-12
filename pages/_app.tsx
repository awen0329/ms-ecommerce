/** @format */

import type { AppProps } from "next/app"
import { Raleway } from "@next/font/google"

const raleway = Raleway({ subsets: ["vietnamese"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            font-family: ${raleway.style.fontFamily};
            margin: 0;
            padding: 0;
          }
          p {
            margin: 0;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
