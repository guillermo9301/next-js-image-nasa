import { Image } from "@/types"
import { useRouter } from "next/router"

type Last10DaysImagesProps = {
    images: Image[]
}

const Last10DaysImages = ({images} : Last10DaysImagesProps) => {
    const router = useRouter();

    return (
        <div>
            <h2>Ultimos 10 dias</h2>
            {images?.map((image, index) => (
                //TODO: enviar este contenedor a un archivo diferente
                <div key={`last-10-day-image-${image.title}`}>
                    <img src={image.url} alt={image.title} onClick={() => router.push(`/image/${image.date}`)}></img>
                    <h2>{image.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Last10DaysImages