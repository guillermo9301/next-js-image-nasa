import { Image as ImageTypes } from "@/types"
import { useRouter } from "next/router"
import Image from "next/image"

import styles from './ImageOfTheDay.module.css' //se importa y se usa como un objeto, llamando a los elementos como atributos 

console.log(styles)

const ImageOfTheDay = ({ url, title, date}: ImageTypes) => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Image src="/nasa-logo.jpg" alt="Nasa Logo" width={170} height={150}></Image>
            <Image 
                src={url || ""} 
                alt={title || ""} 
                onClick={() => router.push(`/image/${date}`)} 
                className={styles.image}
                width={320}
                height={400}
                //fill propiedad del componente, booleano, se usa para llenar todo su contenedor
                >
                </Image>
            <h2>{title}</h2>
        </div>
    )
}

export default ImageOfTheDay