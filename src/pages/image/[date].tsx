import fetcher from "@/utils/fetcher";
import { Image as ImageType } from "@/types";//definiendo un alias para que no se confunda con el comp Image de next.js

type ImageDateProps = {
    image: ImageType
}

type StaticPropsParams = {
    params: any
}

const ImageDate = ({ image }: ImageDateProps) => {
    console.log(image)

    return (
        <div>
            <h2>{image.title}</h2>
            <img src={image.url} alt={image.title}/>
            <h3>{image.date}</h3>
            <p>{image.explanation}</p>
        </div>
    )
}

export async function getStaticProps({ params }: StaticPropsParams) {
    const { date } = params
    console.log(date)

    try {
        const image = await fetcher(`&date=${date}`)
        
        return {
            props: {
                image,
            }
        }
    } catch (error) {
        console.error(error)
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export default ImageDate