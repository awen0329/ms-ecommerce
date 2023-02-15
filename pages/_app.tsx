/** @format */

import type { AppProps } from "next/app"
import Layout from "@/components/layout"
import { RecoilRoot } from "recoil"
import { useState } from "react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
