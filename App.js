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
                        <Button paragraph="<Button />" />
                        <Button paragraph="&:hover, &:focus" />
                    </div>
                    <div className="wrapper">
                        <Button paragraph='<Button variant="outline" />' />
                        <Button paragraph="<&:hover, &:focus" />
                    </div>
                    <div className="wrapper">
                        <Button paragraph='<Button variant="text" />' />
                        <Button paragraph="<&:hover, &:focus" />
                    </div>
                </article>
            </section>
        )
    }
}

export default App;