const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex} className="game-cell">
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li
                                key={`${rowIndex}-${cellIndex}`}
                                className="game-cell-item"
                            >
                                <button>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
