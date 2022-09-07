import React from 'react'
import { Helmet } from 'react-helmet'

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="404 Not found" />
      </Helmet>
      <section>Not Found</section>
    </>
  )
}
