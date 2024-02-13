import fetcher from "@/utils/fetcher"
import ImageOfTheDay from "@/components/ImageOfTheDay";
import Last10DaysImages from "@/components/Last10DaysImages";

import { subDays, format } from 'date-fns';


import { Image } from "@/types";

type HomeProps = {
  imageOfTheDay: Image;
  last10DaysImages: Image[];
}

export default function Home({ imageOfTheDay, last10DaysImages }: HomeProps) {
  console.log(imageOfTheDay)
  return (
    <div>
      <ImageOfTheDay {...imageOfTheDay} />
      <Last10DaysImages images={last10DaysImages} />
    </div>
  )
}
//GENERA LOS DATOS EN EL SERVIDOR CADA VEZ QUE SE HACE UNA PETICION
export async function getServerSideProps() {
  try {
    const today = new Date();
    const formattedToday = format(today, 'yyyy-MM-dd');

    const imageOfTheDay = await fetcher();

    const tenDaysAgo = subDays(today, 30)
    const formattedTenDaysAgo = format(tenDaysAgo, 'yyyy-MM-dd')
    const last10DaysImages = await fetcher(`&start_date=${formattedTenDaysAgo}&end_date=${formattedToday}`)//DONE: ¿Como obtener las fechas de manera dinamica?(libreria date-fns)

    console.log(last10DaysImages)

    return {
      props: {
        imageOfTheDay,
        last10DaysImages,
      }
    }
  } catch (error) {
    console.error(error)
  }
}

//GENERA LOS DATOS SOLO LA PRIMERA VEZ Y LOS CACHEA EN EL NAVEGADOR
/*export async function getStaticProps() {
  try {
    const imageOfTheDay = await fetcher();
    const last10DaysImages = await fetcher('&start_date=2023-11-01&end_date=2023-11-10')//TODO: ¿Como obtener las fechas de manera dinamica?(libreria date-fns)

    console.log(last10DaysImages)

    return {
      props: {
        imageOfTheDay,
        last10DaysImages,
      }
    }
  } catch (error) {
    console.error(error)
  }
}*/