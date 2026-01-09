import { useState } from 'react';
import Player from './components/Player/Player.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';

function App() {
    const [players, setPlayers] = useState([
        { name: 'Player 1', symbol: 'X' },
        { name: 'Player 2', symbol: 'O' },
    ]);

    // function onEdit(index) {
    //     setPlayers((prevPlayers) =>
    //         prevPlayers.map((player, i) =>
    //             i === index ? { ...player, editing: true } : player
    //         )
    //     );
    // }

    // function changeName(index, newName) {
    //     setPlayers((prevPlayers) =>
    //         prevPlayers.map((player, i) =>
    //             i === index ? { ...player, name: newName } : player
    //         )
    //     );
    // }

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player
                        initalName={players[0].name}
                        symbol={players[0].symbol}
                    />
                    <Player
                        initalName={players[1].name}
                        symbol={players[1].symbol}
                    />
                </ol>
                <GameBoard />
            </div>
        </main>
    );
}

export default App;
