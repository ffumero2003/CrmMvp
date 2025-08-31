import { faPhone, faChartColumn, faIdCard, faChartLine, faNoteSticky, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Descripcion from './descripcion'
import Navigation from './navigation'
import Estado from './estado'

function LeftPannel(){
  const navigation = [
    {icon: faChartColumn, text: "Dashboard"},
    {icon: faIdCard, text: "Contactos", path: "/gestion"},
    {icon: faChartLine, text: "Actividades"},
    {icon: faNoteSticky, text: "Notas"},
    {icon: faEnvelope, text: "Emails"},
    {icon: faPhone, text: "Llamadas"},
  ]

  const estados = [
    {texto: "Llamadas activas", num: 0, color: "bg-green-200", colorTexto: "text-green-400"},
    {texto: "Notas pendientes", num: 3, color: "bg-yellow-200", colorTexto: "text-yellow-400"},
    {texto: "Emails sin leer", num: 7, color: "bg-blue-200", colorTexto: "text-blue-400"},
  ]

  return(
    <aside
      className="flex flex-col gap-4 sm:gap-6 items-stretch h-full w-full
                 sm:max-w-[280px] lg:max-w-[300px]
                 px-3 py-3 sm:px-4 sm:py-4
                 overflow-y-auto"
    >
      <Descripcion />

      <div className="w-full flex flex-col items-stretch p-2 sm:p-3 gap-1">
        <Navigation arr={navigation} />
      </div>

      <div className="w-full flex flex-col items-stretch p-2 sm:p-3 gap-1">
        <Estado arr={estados} />
      </div>
    </aside>
  )
}

export default LeftPannel
