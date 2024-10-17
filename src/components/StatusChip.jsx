import './statusChip-style.css'

const StatusChip = ({statusColor, statusText}) => {
  return (
    <div className='status-container'>
        <p className='statusText'>{statusText}</p>
        <div className="colorDot"></div>
    </div>
  )
}

export default StatusChip
