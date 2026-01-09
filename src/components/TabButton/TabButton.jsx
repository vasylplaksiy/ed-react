import './TabButton.css';

// function TabButton(props) {
//     return (
//         <li>
//             <button>{props.children}</button>
//         </li>
//     );
// }

// or

function TabButton({ children, isSelected, ...props }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>
                {children}
            </button>
        </li>
    );
}

export default TabButton;
