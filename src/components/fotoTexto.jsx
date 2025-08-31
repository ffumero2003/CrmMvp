import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FotoTexto({icono, color, texto, size}){
  return(
    <div className="flex items-center gap-2 p-2 sm:p-3 flex-wrap">
      <FontAwesomeIcon icon={icono} className={`${color} ${size} shrink-0`} />
      <p className={`${color} ${size} break-words`}>{texto}</p>
    </div>
  )
}
