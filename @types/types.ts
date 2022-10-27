export type match = {
    homeTeam: team,
    awayTeam: team,
    homeScore: score,
    awayScore: score,
    hasGlobalHighlights: boolean,
    finalResultOnly: boolean,
    customId: string,
    status: status,
    hasEventPlayerStatistics: boolean,
    slug: string,
    homeRedCards: number,
    hasEventPlayerHeatMap: boolean,
    tournament: tournament,
    startTimestamp: number,
    winnerCode: string,
    id: number,
    statusTime: statusTime
}

type team = {
    id: number,
    name: string,
    slug: string,
    type: number,
    gender: string,
    disabled: boolean,
    nameCode: string,
    national: boolean,
    shortName: string,
    userCount: number,
    teamColors: teamColors,
}

type teamColors = {
    primary: string,
    secondary: string,
    text: string,
}

type score = {
    current: number,
    display: number,
    period1: number,
    period2: number,
    normalTime: number,
}

type status = {
    code: number,
    type: string,
    description: string,
}

type tournament = {
    id: number,
    name: string,
    slug: string,
}

type statusTime = {
    timestamp: number,
}