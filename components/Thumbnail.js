import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from 'react';

const  Thumbnail = forwardRef(({result}, ref) =>{
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';

    return (
      <div  ref={ref} className="teaser p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 overflow-hidden">
        <Image
          layout="responsive"
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          alt='image'
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
          <p className='felx items-center flex-row opacity-0 group-hover:opacity-100'>
            {result.media_type && `${result.media_type}`} &#183;{' '}
            {result.release_date || result.first_air_date} &#183;{' '}
            <ThumbUpIcon className="inline h-5 mx-2 " /> {result.vote_count}
          </p>
        </div>
      </div>
    );
})

Thumbnail.displayName = 'Thumbnail'

export default Thumbnail