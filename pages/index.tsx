import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { match } from '../@types/types'
import GridContainer from '../components/GridContainer'
import MatchCard from '../components/MatchCard'
import { getLiveMatchesData } from '../utils/fetchData'

const Home: NextPage = () => {
  const { data } = useQuery(['live'], getLiveMatchesData);

  return (
    <GridContainer>
      {data?.events.map((match: match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </GridContainer>
  )
}

export default Home

export const getServersideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['live'], getLiveMatchesData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
