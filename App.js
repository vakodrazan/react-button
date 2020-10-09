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
                        >
                            Default
                        </Button>
                        <Button 
                            paragraph="&:hover, &:focus" 
                        >
                            Default
                        </Button>
                    </div>

                    <div className="wrapper">
                        <Button 
                            variant="outline" 
                            paragraph='<Button variant="outline" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            paragraph="&:hover, &:focus" 
                        >
                            Default
                        </Button>
                    </div>

                    <div className="wrapper">
                        <Button 
                            variant="text"
                            paragraph='<Button variant="text" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            paragraph="&:hover, &:focus" 
                        >
                            Default
                        </Button>
                    </div>

                    <div className="wrapper">
                        <Button 
                            disableShadow
                            paragraph='<Button disabledShadow />' 
                        >
                            Default
                        </Button>
                    </div>

                    <div className="wrapper">
                        <Button 
                            disabled
                            paragraph='<Button disabled />' 
                        >
                            disabled
                        </Button>
                        <Button 
                            variant="text"
                            disabled
                            paragraph='<Button variant="text" disabled />' 
                        >
                            disabled
                        </Button>
                    </div>

                    <div className="wrapper">
                        <Button 
                            startIcon="local_grocery_store" 
                            paragraph='<Button startIcon="local_grocery_store" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            endIcon="local_grocery_store"
                            paragraph='<Button endIcon="local_grocery_store" />' 
                        >
                            Default
                        </Button>
                    </div>

                    <div className="wrapper">
                        <Button 
                           size="sm" 
                            paragraph='<Button color="sm" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            size="md"
                            paragraph='<Button color="md" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            size="lg"
                            paragraph='<Button color="lg" />' 
                        >
                            Default
                        </Button>
                    </div>

                    <div className="wrapper">
                        <Button 
                            color="default" 
                            paragraph='<Button color="default" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            color="primary"
                            paragraph='<Button color="primary" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            color="secondary"
                            paragraph='<Button color="secondary" />' 
                        >
                            Default
                        </Button>
                        <Button 
                            color="danger"
                            paragraph='<Button color="danger" />' 
                        >
                            Default
                        </Button>
                    </div>
                </article>
            </section>
        )
    }
}

export default App;