import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InfoUsuario({icono, texto, nombre}){
  return(
    <div className="flex items-start gap-2 p-2">
      <FontAwesomeIcon icon={icono} className="text-xl sm:text-2xl text-gray-500 shrink-0" />
      <div className="flex flex-col min-w-0">
        <h4 className="text-xs sm:text-sm text-gray-500">{texto}</h4>
        <h3 className="text-sm sm:text-base truncate">{nombre}</h3>
      </div>
    </div>
  )
}

export default InfoUsuario;
