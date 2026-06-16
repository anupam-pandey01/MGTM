import { Microscope } from 'lucide-react'
import React from 'react'

const Note = ({ icon, boldText, paraText, className, linkTxt, linkHref }) => {
  return (
    <div className={className}>
      {icon}
      <p>
        <strong>{boldText}</strong>{" "}
        {linkTxt && linkHref && (
          <a href={linkHref}>{linkTxt}</a>
        )}
        {" "}{paraText}
      </p>
    </div>
  )
}

export default Note