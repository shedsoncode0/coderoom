import React from 'react'

function StatusTag({status, text}) {
    let style;
    switch (status) {
        case "active":
            style = "bg-Green/10 text-Green p-2 rounded-md font-medium"
            break;
        case "completed":
            style = "bg-Green/10 text-Green p-2 rounded-md font-medium"
            break;
        case "sent":
            style = "bg-Green/10 text-Green p-2 rounded-md font-medium"
            break;
        case "closed":
            style = "bg-Red/10 text-Red p-2 rounded-md font-medium"
            break;
        case "canceled":
            style = "bg-Red/10 text-Red p-2 rounded-md font-medium"
            break;
        case "ongoing":
            style = "bg-Yellow/10 text-Yellow p-2 rounded-md font-medium"
            break;
    
        default:
            break;
    }


  return (
    <button className={style}>
        { text }
    </button>
  )
}

export default StatusTag