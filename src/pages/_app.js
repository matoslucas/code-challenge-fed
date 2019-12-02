import React, { Fragment } from "react"
import App from "next/app"
import "antd/dist/antd.less"
// import "normalize.css"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Component {...pageProps} />
        <style global jsx>{`
          html {
            box-sizing: border-box;
          }
          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }
          body {
            background: #fafafa;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          }
        `}</style>
      </Fragment>
    )
  }
}
