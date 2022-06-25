import React from 'react';

function SkillIcon({ color, size }) {
    return (
        <svg
            id='bracket-3'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='icon line'
            width={size}
            height={size}
            style={{
                border: `solid 2px ${color}`,
                padding: '5px',
                borderRadius: '5px',
                transition: '0.2s',
            }}
        >
            <path
                id='primary'
                d='M15,3h1a2,2,0,0,1,2,2v5a2,2,0,0,0,2,2h0a2,2,0,0,0-2,2v5a2,2,0,0,1-2,2H15'
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                }}
            ></path>
            <path
                id='primary-2'
                data-name='primary'
                d='M9,3H8A2,2,0,0,0,6,5v5a2,2,0,0,1-2,2H4a2,2,0,0,1,2,2v5a2,2,0,0,0,2,2H9'
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                }}
            ></path>
        </svg>
    );
}

export default SkillIcon;
