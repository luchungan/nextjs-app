import { photos } from "../../../data";

export default async function PhotoModal({ params }:{params:Promise<{id:string}>}) {
  const {id} = await params
  const photo =  photos.find((p) => p.id === id)
  return (
    <div className="flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full">
      <img className="w-52" src={photo!.src} />
    </div>
  )
}