const Info = ({
  label,
  value,
  strong = false,
  isTruncate = false,
  color = 'text-white'
}) => (
  <div>
    <div className="text-xs text-emerald-300 font-semibold">{label}</div>
    <div
      className={`text-sm ${color} ${
        strong ? 'font-bold text-emerald-200' : ''
      } ${isTruncate ? 'truncate' : ''}`}
    >
      {value || '-'}
    </div>
  </div>
);

export default Info;