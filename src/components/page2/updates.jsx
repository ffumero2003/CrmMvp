import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Updates({ stats }){
  return(
    <div className="w-full py-3 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map(({ icon, num, text, textColor, bg }, i) => (
        <div key={i} className={`${bg} p-6 sm:p-8 rounded-lg flex items-center gap-3`}>
          <FontAwesomeIcon icon={icon} className={`${textColor} text-4xl sm:text-5xl`}/>
          <div className="flex flex-col">
            <h1 className={`${textColor} text-xl sm:text-2xl font-bold`}>{num}</h1>
            <p className={`${textColor} text-sm sm:text-base`}>{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Updates;
