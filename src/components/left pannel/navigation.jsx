import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Navigation({arr}){
  return(
    <>
      <h3 className="text-gray-400 text-xs sm:text-sm mb-1">NAVEGACION</h3>

      {arr.map(({icon, text, path}, i) => {
        const content = (
          <button
            key={i}
            className="group flex w-full items-center gap-2 px-2 py-2 rounded-lg
                       hover:shadow-lg hover:bg-blue-200 transition-all duration-300 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={icon}
              className="shrink-0 group-hover:text-blue-600 transition-all duration-300 text-sm sm:text-base"
            />
            <h4 className="group-hover:text-blue-600 transition-all duration-300
                           text-sm sm:text-base truncate">
              {text}
            </h4>
          </button>
        )

        return path ? (
          <Link key={i} to={path} className="block">{content}</Link>
        ) : (
          <div key={i}>{content}</div>
        )
      })}
    </>
  )
}
