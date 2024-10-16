import './statusChip-style.css'

const StatusChip = ({statusColor, statusText}) => {
  return (
    <div className='status-container'>
        <div className="colorDot"></div>
        <p className='statusText'>{statusText}</p>
    </div>
  )
}

export default StatusChip
