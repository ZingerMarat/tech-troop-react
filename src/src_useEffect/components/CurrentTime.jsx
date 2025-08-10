import { useEffect, useState } from "react"

function CurrentTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div>Current time is: {time}</div>
    </>
  )
}

export default CurrentTime
