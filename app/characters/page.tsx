import {API} from '../../assets/api/api';
import {CharacterType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {CharacterCard} from '../../components/Card/CharacterCard/CharacterCard';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';
import process from 'node:process';
import {notFound} from 'next/navigation';
import {revalidatePath} from 'next/cache';



const getCharacters=async ():Promise<ResponseType<CharacterType>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`);//статическая страница

    /*revalidatePath('/characters'); по требованию */
    return await response.json();
}

export default async function  Characters () {
    const {results} = await getCharacters()

    if(!results){
        notFound()
    }

    const charactersList = results.map(character => (
        <CharacterCard key={character.id} character={character}/>
    ))

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    )
}

