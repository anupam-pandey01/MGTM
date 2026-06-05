import { Microscope } from 'lucide-react'
import React from 'react'

const Note = ({icon, boldText, paraText, className}) => {
  return (
    <div className={className}>
        {icon}
        <p>
            <strong> {boldText}  </strong>{" "}
            {paraText}
        </p>

    </div>
  )
}

export default Note