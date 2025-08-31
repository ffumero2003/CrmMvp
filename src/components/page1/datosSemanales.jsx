import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import FotoTexto from '../fotoTexto'

export default function DatosSemanales({ arr }) {
  return (
    <div className="flex flex-wrap gap-2">
      {arr.map(({ text, icon, num, uprising, colorBg, textColor, iconBgColor }, i) => (
        <div
          key={i}
          className={`flex flex-col ${colorBg} p-3 sm:p-4 gap-4 rounded-lg justify-between
                      basis-full sm:basis-[calc(50%-0.25rem)] lg:basis-[calc(25%-0.375rem)] min-w-0`}
        >
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-sm sm:text-base truncate">{text}</h5>
            <FontAwesomeIcon className={`${iconBgColor} rounded-lg p-2 ${textColor} shrink-0`} icon={icon} />
          </div>

          <h1 className={`${textColor} text-3xl sm:text-4xl font-bold`}>{num}</h1>

          <div className="flex items-center gap-1">
            <FotoTexto icono={faArrowTrendUp} color="text-green-500" texto={uprising} />
          </div>
        </div>
      ))}
    </div>
  )
}
