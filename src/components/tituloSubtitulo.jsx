export default function TituloSubtitulo({titulo, subtitulo}){
  return(
    <div className="flex flex-col gap-1 sm:gap-2">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">{titulo}</h1>
      <p className="text-sm sm:text-base lg:text-lg">{subtitulo}</p>
    </div>
  )
}
