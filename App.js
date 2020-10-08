import React from 'react';
import Button from './Button';
import "./style.css"

class App extends React.Component {
    render() {
        return (
            <article>
                <header>
                    <h2>Buttons</h2>
                </header>
                <div>
                    <p>Button by default</p>
                    <Button />
                </div>
            </article>
        )
    }
}

export default App;