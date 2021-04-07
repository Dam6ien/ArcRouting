import React from 'react'

export function ExternalLinkHeader({ url, children }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
