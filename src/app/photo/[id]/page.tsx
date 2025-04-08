import { photos } from "../../data";

export default async function PhotoPage({ params }:{params:Promise<{id:string}>}) {
  const {id} = await params
  const photo = photos.find((p) => p.id === id);
  return <img className="block w-1/4 mx-auto mt-10" src={photo!.src} />;
}