import * as React from 'react'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

type PageHeadingProps = {
  title?:string
}

export const PageHeading: React.FC<PageHeadingProps> = ({ children , title}) => {
  return  <>
  <Head>
    <title>{title}</title>
  </Head>
  <Typography variant='h4'>{children}</Typography>
  </> 
}
