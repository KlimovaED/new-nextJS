'use client'

import {PageWrapper} from 'components/PageWrapper/PageWrapper';
import {Card} from 'components/Card/Card';
import {useEffect, useState} from 'react';
import {API} from 'assets/api/api';
import {LocationType} from 'assets/api/rick-and-morty-api';
import {Nullable} from '@/types/Nullable';
import {usePathname, useRouter} from 'next/navigation';



const Locations = () => {
    const [locations, setLocations] = useState<Nullable<LocationType[]>>(null)
    const router = useRouter();
    console.log()

    useEffect(() => {
        API.rickAndMorty.getLocations().then(res => setLocations(res.results))
    }, [])

    if (!locations) return null

    const locationsList = locations.map(location => (
        <Card key={location.id} name={location.name}/>
    ))

    const goToBack=()=>{
       router.back()
    }

    return (
        <PageWrapper>
            {locationsList}
            <button onClick={goToBack} >Go To Back</button>
        </PageWrapper>
    )
}


export default Locations
