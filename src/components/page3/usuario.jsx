function Usuario({nombre, posicion, label, inicial}){
  return(
    <div className="flex flex-col items-center mt-10">
      <div className="h-16 w-16 sm:h-20 sm:w-20 bg-blue-500 flex justify-center items-center rounded-full">
        <h1 className="text-2xl sm:text-3xl text-white">{inicial}</h1>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h3 className="font-bold mt-3 text-lg sm:text-xl text-center">{nombre}</h3>
        <h5 className="text-gray-500 text-sm sm:text-base text-center">{posicion}</h5>
        <div className="px-2 py-1 bg-yellow-200 rounded-lg">
          <p className="text-yellow-600 text-sm sm:text-base">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default Usuario
