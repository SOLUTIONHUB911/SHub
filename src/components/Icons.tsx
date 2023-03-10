
const Ellipses: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg width="170" height="130" viewBox="0 0 170 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g opacity="0.8">
        <circle cx="5" cy="5" r="5" fill="#1565D8" />
        <circle cx="5" cy="85" r="5" fill="#1565D8" />
        <circle cx="165" cy="5" r="5" fill="#1565D8" />
        <circle cx="165" cy="85" r="5" fill="#1565D8" />
        <circle cx="5" cy="45" r="5" fill="#1565D8" />
        <circle cx="5" cy="125" r="5" fill="#1565D8" />
        <circle cx="165" cy="45" r="5" fill="#1565D8" />
        <circle cx="165" cy="125" r="5" fill="#1565D8" />
        <circle cx="85" cy="5" r="5" fill="#1565D8" />
        <circle cx="85" cy="85" r="5" fill="#1565D8" />
        <circle cx="85" cy="45" r="5" fill="#1565D8" />
        <circle cx="85" cy="125" r="5" fill="#1565D8" />
        <circle cx="45" cy="5" r="5" fill="#1565D8" />
        <circle cx="45" cy="85" r="5" fill="#1565D8" />
        <circle cx="45" cy="45" r="5" fill="#1565D8" />
        <circle cx="45" cy="125" r="5" fill="#1565D8" />
        <circle cx="125" cy="5" r="5" fill="#1565D8" />
        <circle cx="125" cy="85" r="5" fill="#1565D8" />
        <circle cx="125" cy="45" r="5" fill="#1565D8" />
        <circle cx="125" cy="125" r="5" fill="#1565D8" />
      </g>
    </svg>

  )
}
export { Ellipses };