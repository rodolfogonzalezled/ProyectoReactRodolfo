import React from 'react'
import './ItemListContainer.css'

const games = [
    { id: 1, name: 'NBA 2K22', color: 'darkcyan' },
    { id: 2, name: 'FIFA 22', color: 'darkcyan' },
    { id: 3, name: 'Resident Evil 3', color: 'darkcyan' },
    { id: 4, name: 'Sims 4', color: 'darkcyan' },
    { id: 5, name: 'Need for Speed', color: 'darkcyan' },
    { id: 6, name: 'Crash Ctr', color: 'darkcyan' },
    { id: 7, name: 'Uncharted', color: 'darkcyan' },
    { id: 8, name: 'Horizon II', color: 'darkcyan' },
    { id: 9, name: 'Far Cry 6', color: 'darkcyan' }
];

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <ul className='list'>
                {games.map(game => <li key={game.id} style={{ color: game.color }}>{game.name}</li>)}
            </ul>
        </div>
    )
}

export default ItemListContainer