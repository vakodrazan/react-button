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
                        <Button 
                            paragraph="<Button />" 
                        />
                        <Button 
                            btnStyle="default"
                            paragraph="&:hover, &:focus" 
                        />
                    </div>
                    <div className="wrapper">
                        <Button 
                            btnStyle="variant"
                            paragraph='<Button variant="outline" />' 
                        />
                        <Button 
                            btnStyle="variant variantHover"
                            paragraph="&:hover, &:focus" 
                        />
                    </div>
                    <div className="wrapper">
                        <Button 
                            btnStyle="text"
                            paragraph='<Button variant="text" />' 
                        />
                        <Button 
                            btnStyle="text textHover"
                            paragraph="&:hover, &:focus" 
                        />
                    </div>

                    <div className="wrapper">
                        <Button 
                            btnStyle="disabledShadow"
                            paragraph='<Button disabledShadow />' 
                        />
                    </div>
                </article>
            </section>
        )
    }
}

export default App;