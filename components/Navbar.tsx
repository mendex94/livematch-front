import { SoccerBall } from 'phosphor-react';
import LinkItem from "./LinkItem";

type Props = {
    path: string;
}

function Navbar({ path }: Props) {
    return (
        <nav className="p-2 bg-[#111] flex text-md font-bold pt-14">
            <div className="container mx-auto flex justify-between items-center max-w-5xl text-xl border-b border-neutral-700 pb-2">
                <div className="flex items-center hover:cursor-pointer">
                    <SoccerBall
                        size={32}
                        className="text-orange-500 rounded-full p-1"
                    />
                    <span className="text-white">LiveMatch</span>
                </div>
                <div className="flex gap-7">
                    <LinkItem href="/" path={path}>
                        Ao vivo
                        {' '}
                        <span className='text-red-900 animate-pulse'>•</span>
                    </LinkItem>
                    <LinkItem href="/matches" path={path}>
                        Brasileirão Série A
                    </LinkItem>
                </div>
            </div>
        </nav>
    )
}

export default Navbar