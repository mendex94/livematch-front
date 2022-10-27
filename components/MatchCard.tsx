import { match } from "../@types/types";

type Props = {
    match: match;
}

function MatchCard({ match }: Props) {
    function convertData(date: number) {
        let newDate = new Date(date * 1000);
        return newDate.toLocaleDateString("pt-BR")
    }
    const date = convertData(match.startTimestamp);
    return (
        <div className="bg-neutral-700 max-h-48 flex p-4 rounded flex-col text-center gap-4 hover:bg-white/30 hover:cursor-default">
            <h2 className="font-bold text-orange-500">{match.tournament.name}</h2>
            <div className="flex justify-between">
                <div className="text-white">
                    <p className="text-left">{match.homeTeam.name}</p>
                    <p className="text-left">{match.awayTeam.name}</p>
                </div>
                <div className="text-white">
                    <p>{match.homeScore.display}</p>
                    <p>{match.awayScore.display}</p>
                </div>
            </div>
            {match.status.type === 'finished' ?
                <p className="text-white">{date}</p> :
                <p className="text-white">{match.status.description} <span className='text-red-900 animate-pulse'>•</span></p>
            }
        </div>
    )
}

export default MatchCard