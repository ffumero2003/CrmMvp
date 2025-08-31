export default function Estado({arr}){
  return(
    <>
      <h3 className="text-gray-400 text-xs sm:text-sm mb-1">ESTADO DEL SISTEMA</h3>

      {arr.map(({texto, num, color, colorTexto}, i) => (
        <button
          key={i}
          className="flex justify-between items-center w-full mb-1 px-2 py-1 rounded-lg hover:opacity-90 transition"
        >
          <h4 className="text-sm sm:text-base truncate pr-2">{texto}</h4>

          <div
            className={`flex justify-center items-center ${color} ${colorTexto}
                        rounded-full h-6 w-6 sm:h-7 sm:w-7 text-xs sm:text-sm shrink-0`}
          >
            <p>{num}</p>
          </div>
        </button>
      ))}
    </>
  )
}
