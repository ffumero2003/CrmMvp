import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HistorialActividades({arr}){
  return(
    <>
      <div className="flex items-center text-2xl sm:text-3xl gap-2 mt-8">
        <FontAwesomeIcon icon={faWaveSquare} />
        <h1 className="font-bold">Historia de Actividades</h1>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {arr.map(({icono, title, subTitle, para, color, bg}, i) => (
          <div key={i} className="border rounded-lg p-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div className="flex gap-2">
                <FontAwesomeIcon icon={icono} className={`${bg} ${color} text-2xl sm:text-3xl rounded-lg p-2`} />
                <div className="flex flex-col">
                  <h2 className="font-bold text-lg">{title}</h2>
                  <p className="text-sm sm:text-base">{subTitle}</p>
                </div>
              </div>
              <div className="text-sm sm:text-base">
                <p>hace 3 dias</p>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base leading-relaxed">{para}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HistorialActividades;
