import './TabButton.css';

// function TabButton(props) {
//     return (
//         <li>
//             <button>{props.children}</button>
//         </li>
//     );
// }

// or

function TabButton({ children, onSelect, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}

export default TabButton;
