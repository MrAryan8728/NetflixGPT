import React from 'react';
import MovieCard from '../Components/MovieCard';

const MovieList = ({ title, movies }) => {
    const scrollContainerStyle = {
        display: 'flex',
        overflowX: 'scroll',
        msOverflowStyle: 'none',  // IE and Edge
        scrollbarWidth: 'none',  // Firefox
    };

    const flexGapStyle = {
        display: 'flex',
        gap: '16px',
    };

    return (
        <div>
            <h1 className='text-2xl font-semibold text-white mb-5'>{title}</h1>
            <div style={scrollContainerStyle} className="scroll-container">
                <div style={flexGapStyle}>
                    {movies.map((val) => (
                        <MovieCard key={val.id} imgURI={val?.poster_path} />
                    ))}
                </div>
            </div>
            {/* Hide scrollbar for Webkit browsers */}
            <style>{`
                .scroll-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default MovieList;
