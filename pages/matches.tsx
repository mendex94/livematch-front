import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { useState } from 'react'
import { match } from '../@types/types'
import GridContainer from '../components/GridContainer'
import MatchCard from '../components/MatchCard'
import { getMatchesData } from '../utils/fetchData'

const Matches: NextPage = () => {
    const { data } = useQuery(['matches'], getMatchesData);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <div className='max-w-5xl mx-auto'>
                <input
                    type="text"
                    placeholder="Pesquisar partidas..."
                    className='w-full rounded px-4 py-1'
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
            <GridContainer>
                {data?.filter((match: match) => {
                    if (searchTerm === '') {
                        return match
                    } else if (match.homeTeam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        match.awayTeam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        match.homeTeam.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        match.awayTeam.shortName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return match
                    }
                }).sort((a: match, b: match) => a.startTimestamp < b.startTimestamp ? 1 : -1)
                    .map((match: match) => (
                        <MatchCard key={match.id} match={match} />
                    ))}
            </GridContainer>
        </>
    )
}

export default Matches
