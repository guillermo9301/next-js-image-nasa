import { Image } from "@/types"
import { useRouter } from "next/router"

import styles from './ImageOfTheDay.module.css' //se importa y se usa como un objeto, llamando a los elementos como atributos 

console.log(styles)

const ImageOfTheDay = ({ url, title, date}: Image) => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <img src={url} alt={title} onClick={() => router.push(`/image/${date}`)} className={styles.image}></img>
            <h2>{title}</h2>
        </div>
    )
}

export default ImageOfTheDay