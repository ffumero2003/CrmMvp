import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Llamadas({ arr }) {
  return (
    <div className="flex flex-col divide-y">
      {arr.map(({ phoneNum, going, duration, date }, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
              <FontAwesomeIcon icon={faPhone} className="text-white text-base sm:text-lg" />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="font-medium truncate">Llamada {going}: {phoneNum}</h1>
              <p className="text-sm text-gray-500">{duration}</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <h4 className="text-green-600 font-medium">Finalizado</h4>
          </div>
        </div>
      ))}
    </div>
  )
}
