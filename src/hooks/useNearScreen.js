import { useEffect, useRef, useState } from 'react'

export function useNearScreen() {
  // ref se usa como el  observado
  // cuando SHOW es true despliega la imagen,
  const observed = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.InteractionOberver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(observed.current)
    })
  }, [observed])

  return [show, observed]
}
