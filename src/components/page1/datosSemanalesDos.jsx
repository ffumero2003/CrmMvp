import FotoTexto from '../fotoTexto'

export default function DatosSemanalesDos({ arr }) {
  return (
    <div className="flex flex-wrap gap-2">
      {arr.map(({ icono, text, num, confirmation, bgColor, textColor }, i) => (
        <div
          key={i}
          className={`${bgColor} flex flex-col justify-center items-start p-3 sm:p-4 rounded-lg gap-2
                      basis-full sm:basis-[calc(50%-0.25rem)] lg:basis-[calc(33.333%-0.333rem)] min-w-0`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <FotoTexto icono={icono} texto={text} color={textColor} size="text-sm sm:text-base" />
          </div>
          <h1 className={`${textColor} text-2xl sm:text-3xl font-bold`}>{num}</h1>
          <p className={`${textColor} text-sm sm:text-base`}>{confirmation}</p>
        </div>
      ))}
    </div>
  )
}
