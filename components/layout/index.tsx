/** @format */

import React from "react"
import Head from "next/head"
import { Raleway } from "@next/font/google"
import Header from "@/components/header"
import styles from "./Layout.module.scss"

const raleway = Raleway({ subsets: ["vietnamese"] })

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
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
          * {
            box-sizing: border-box;
          }
        `}
      </style>
      <Head>
        <title>MS Ecommerce</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
