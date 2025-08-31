import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Descripcion(){
  return(
    <div className="flex flex-wrap gap-3 items-center p-3 w-full">
      <div className="shrink-0">
        <FontAwesomeIcon
          icon={faPhone}
          className="p-3 bg-blue-500 rounded-md text-white text-base sm:text-lg"
        />
      </div>

      <div className="flex flex-col min-w-0">
        <h1 className="font-bold text-base sm:text-lg leading-tight truncate">CRM Pro</h1>
        <p className="text-sm sm:text-base leading-snug break-words">Sistema de gestion</p>
      </div>
    </div>
  )
}
