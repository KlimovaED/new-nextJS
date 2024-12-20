import {EpisodeType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Card} from '../../components/Card/Card';
import * as process from 'node:process';
import {notFound} from 'next/navigation';



const getEpisodies=async():Promise<ResponseType<EpisodeType>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`,{
        next:{//getStaticProps
            revalidate:0,//сделали запрос заново, а не берем из кэша
        }
    });
    return await response.json();
}

export default async function  Episodes  ()  {
    const {results} =  await getEpisodies();

if(!results){
   notFound()
}

    const episodesList = results.map(episode => (
        <Card key={episode.id} name={episode.name}/>
    ))

    return (
        <PageWrapper>
            {results.length ? episodesList : 'Ничего не найдено'}
        </PageWrapper>
    )
}


