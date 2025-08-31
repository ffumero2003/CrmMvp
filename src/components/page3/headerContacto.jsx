import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import TituloSubtitulo from '../tituloSubtitulo';

function HeaderContacto(){
  return(
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
        <button className="flex items-center gap-2 rounded-lg p-2 hover:shadow-lg transition-shadow duration-500 w-full sm:w-auto">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Volver</span>
        </button>
        <div className="mt-1 sm:mt-0">
          <TituloSubtitulo titulo="Detalle del Contacto" subtitulo="Informacion completa y actvidades relacionadas" />
        </div>
      </div>

      <button className="px-3 py-2 bg-blue-500 text-white flex gap-2 h-fit rounded-lg hover:shadow-lg transition-shadow duration-500 w-full sm:w-auto">
        <FontAwesomeIcon icon={faPenToSquare} />
        <span>Editar</span>
      </button>
    </div>
  )
}

export default HeaderContacto;
