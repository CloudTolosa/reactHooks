import React, {useState} from 'react';


const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick  = () => {
        setDarkMode(!darkMode);
    }
    return(
        <div className="Header">
            <h1>
                React Hooks
            </h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode': 'Light'}</button>
            <button type="button" onClick={() => setDarkMode (!darkMode)}>{darkMode ? 'Dark Mode2': 'Light2'}</button>
        </div>

    );
}

export default Header;