import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEye, faPhone, faTag, faEnvelope, faLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Card({ array }){
  return(
    <>
      {array.map(({ bgLetra, nombre, posicion, label, compania, email, phone, ubicacion, detalles, colorLetra, colorBg }, i) => (
        <div
          key={i}
          className="w-full sm:w-1/2 lg:w-1/3 box-border p-3"
        >
          <div className="flex flex-col shadow-sm p-3 h-full rounded-lg">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 min-w-0">
                <div className="h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                  <h3 className="text-white text-2xl">{bgLetra}</h3>
                </div>
                <div className="flex flex-col min-w-0">
                  <h2 className="text-xl text-black truncate">{nombre}</h2>
                  <h5 className="text-md text-gray-400 truncate">{posicion}</h5>
                </div>
              </div>

              <div className={`${colorBg} ${colorLetra} flex justify-center items-center rounded-lg px-3 py-1 h-fit w-fit shrink-0`}>
                <p className="whitespace-nowrap">{label}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex gap-1 items-center text-gray-500 min-w-0">
                <FontAwesomeIcon icon={faBuilding} />
                <p className="truncate">{compania}</p>
              </div>
              <div className="flex gap-1 items-center text-gray-500 min-w-0">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="truncate">{email}</p>
              </div>
              <div className="flex gap-1 items-center text-gray-500">
                <FontAwesomeIcon icon={faPhone} />
                <p>{phone}</p>
              </div>
              <div className="flex gap-1 items-center text-gray-500 min-w-0">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="truncate">{ubicacion}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {detalles.map((det, j) => (
                <div key={j} className="flex items-center gap-1 text-sm">
                  <FontAwesomeIcon icon={faTag} />
                  <p className="truncate">{det}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex justify-between items-center pt-4">
              <div className="text-gray-500">
                <p>06 ago 2025</p>
              </div>
              <div className="flex gap-4 items-center">
                <Link
                  to={`/detalle/${i + 1}`}
                  aria-label={`Ver detalles de ${nombre}`}
                  className="inline-flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faEye} className="text-black text-lg" />
                </Link>
                <FontAwesomeIcon icon={faPenToSquare} className="text-blue-400 text-lg"/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card;
