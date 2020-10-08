import React from 'react';
import Button from './Button';
import "./style.css"

class App extends React.Component {
    render() {

        return (
            <section>
                <header>
                    <h2>Buttons</h2>
                </header>

                <article>
                    <div className="wrapper">
                        <div>
                            <p>Button by default</p>
                            <Button />
                        </div>
                        <div>
                            <p>&:hover, &focus</p>
                            <Button />
                        </div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <p>variant="outline"</p>
                            <Button />
                        </div>
                        <div>
                            <p>&:hover, &focus</p>
                            <Button />
                        </div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <p>variant="text"</p>
                            <Button />
                        </div>
                        <div>
                            <p>&:hover, &focus</p>
                            <Button />
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}

export default App;