/* import { useEffect, useState } from 'react'
import { debounce } from '../utils'

const [vh, setVh] = useState(null)
useEffect(() => {
  const handleViewportH = () => {
    const virtualh = window.innerHeight * 0.01
    setVh(virtualh)
  }

  window.addEventListener('resize', debounce(handleViewportH, 600))

  return () => {
    window.removeEventListener('resize', debounce(handleViewportH, 600))
  }
}, [])
console.log({ vh }) */
