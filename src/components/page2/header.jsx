import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'

function Header({ title }){
  return(
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <h1 className="font-bold text-lg">{title}</h1>

      <div className="flex items-center justify-between w-full sm:w-auto gap-4">
        <div className="flex items-center gap-2 flex-1 sm:flex-none min-w-[220px]">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500"/>
          <input
            type="text"
            placeholder="Buscar Contacto..."
            className="focus:outline-none w-full"
          />
        </div>
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>
  )
}

export default Header;
