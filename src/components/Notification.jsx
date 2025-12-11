import { useState, useEffect } from 'react'

export default function Notification({ message, type = 'info', duration = 3000, onClose }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onClose) onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!visible) return null

  return (
    <div className={`notification notification-${type}`}>
      <span>{message}</span>
      <button onClick={() => {
        setVisible(false)
        if (onClose) onClose()
      }}>×</button>
    </div>
  )
}
