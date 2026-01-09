import { useState } from 'react';

export default function Player({ initalName, symbol, changeName }) {
    const [playerName, setPlayerName] = useState(initalName);
    const [isEditing, setIsEditing] = useState(false);

    function editingToggle() {
        setIsEditing((prev) => !prev);
    }

    function chnageName(event) {
        setPlayerName((oldName) => event.target.value);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{playerName}</span>
                ) : (
                    <input
                        className="player-val"
                        required
                        type="text"
                        onChange={chnageName}
                        defaultValue={playerName}
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button className="player-edit" onClick={editingToggle}>
                {!isEditing ? 'Edit' : 'Save'}
            </button>
        </li>
    );
}
