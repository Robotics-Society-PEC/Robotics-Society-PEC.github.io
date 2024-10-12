import Image from 'next/image';
import React from 'react';

interface CoverProps {
    url?: string;
}

const Cover: React.FC<CoverProps> = ({ url }) => {
    return (
        <div className='relative w-full h-[35vh] bg-neutral-200'>
            {url && (
                <Image src={url} alt='Cover' fill className='object-cover' sizes='100vw' />
            )}
        </div>
    );
}

export default Cover;
