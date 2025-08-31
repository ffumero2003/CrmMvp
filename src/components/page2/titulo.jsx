import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TituloSubtitulo from '../tituloSubtitulo';

function Titulo(){
  return(
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mt-12">
      <TituloSubtitulo
        titulo="Gestion de Contactos"
        subtitulo="Administra tu base de datos de clientes y prospectos"
      />
      <button className="flex gap-2 p-2 bg-blue-600 rounded-lg justify-center items-center hover:bg-blue-700 transition-all duration-500 w-full sm:w-auto">
        <FontAwesomeIcon icon={faPlus} className="text-white"/>
        <p className="text-lg text-white">Nuevo Contacto</p>
      </button>
    </div>
  )
}

export default Titulo;
