import { useEffect, useRef } from 'react'

export function usePageBottom(
  callback: () => any,
) {
  const bottomRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      },
      { threshold: 1 },
    )

    if (bottomRef.current) {
      observer.observe(bottomRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [callback])

  return bottomRef
}
