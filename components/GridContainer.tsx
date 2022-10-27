import React from 'react';

type Props = {
    children: React.ReactNode;
}

function GridContainer({ children }: Props) {
    return (
        <main className='w-full bg-[#111]'>
            <div className='grid grid-cols-1 md:grid-cols-4 max-w-5xl gap-4 min-h-screen mx-auto border border-neutral-700 p-8 mt-4 mb-4 rounded'>
                {children}
            </div>
        </main>
    )
}

export default GridContainer