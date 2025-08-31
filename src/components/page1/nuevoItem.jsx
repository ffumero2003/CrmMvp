import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function NuevoItem({ arr }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 p-3">
      {arr.map(({ label, icon, bg, hover, path }, i) => (
        <Link
          to={path}
          key={i}
          className={`flex flex-col items-center justify-center gap-2 ${bg} text-white rounded-lg py-5 sm:py-6 ${hover} transition`}
        >
          <FontAwesomeIcon icon={icon} className="text-xl sm:text-2xl" />
          <span className="text-sm sm:text-base text-center">{label}</span>
        </Link>
      ))}
    </div>
  )
}
