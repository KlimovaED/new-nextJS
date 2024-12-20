import {
    CharacterType,
    ResponseType
} from '../../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../../components/PageWrapper/PageWrapper';
import {
    CharacterCard
} from '../../../components/Card/CharacterCard/CharacterCard';
import s from '../../../styles/styles.module.css'
import process from 'node:process';

const getCharacters=async ():Promise<ResponseType<CharacterType>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`);//статическая страница

    /*revalidatePath('/characters'); по требованию */
    return await response.json();
}

const getCharacter=async(id:string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character/${id}`);//статическая страница

    /*revalidatePath('/characters'); по требованию */
    return await response.json();
}

export async function generationStaticPerams(){
    const {results} =await getCharacters()

    return results.map(character=>({id:String(character.id)}))
}

export async function generateMetadata({params}:{params:{id:string}}){
   return  {
        title: `Character № ${params.id}`
    }
}


export default async function Character ({params}:{params:{id:string}}) {
const character = await getCharacter(params.id)



    return (
        <PageWrapper>
            <div className={s.container}>
                <div className={s.text}>ID: {params.id}</div>
                <CharacterCard key={params.id} character={character}/>
                {/*<button className={s.button} onClick={goToCharacters}>GO TO CHARACTERS</button>*/}
            </div>
        </PageWrapper>
    )
}


