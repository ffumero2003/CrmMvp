import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

function Etiquetas({ items }) {
  return (
    <div className="mt-5 p-2">
      <h4 className="text-gray-500 text-sm sm:text-base">Etiquetas</h4>
      <div className="flex flex-wrap gap-2 mt-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-1 px-2 py-1 rounded">
            <FontAwesomeIcon icon={faTag} />
            <p className="text-sm sm:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Etiquetas
