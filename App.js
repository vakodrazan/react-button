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

                <section>
                    {/* Style the button by default */}
                    <div className="wrapper">
                        <Button 
                            paragraph="<Button />" 
                        >
                            Default
                        </Button>
                    </div>

                    {/* Get the border when using the `variant="outline"` in the button and it should apply the style */}
                    <div className="wrapper">
                        <Button 
                            variant="outline" 
                            paragraph='<Button variant="outline" />' 
                        >
                            Default
                        </Button>
                    </div>

                    {/* The style for the button should apply when using `variant="text"` */}
                    <div className="wrapper">
                        <Button 
                            variant="text"
                            paragraph='<Button variant="text" />' 
                        >
                            Default
                        </Button>
                    </div>

                    {/* Remove the shadow that set by default when using `disableShandow` property */}
                    <div className="wrapper">
                        <Button 
                            disableShadow
                            paragraph='<Button disabledShadow />' 
                        >
                            Default
                        </Button>
                    </div>

                    {/* Disabled the box shadow and make the text a bit blury when using `disable` but the background color still the one set by default */}
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

                    {/* Get the icon svg when using property `startIcon or endIcon` with `local_grocery_store` value in it */}
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

                    {/* Try to use different size by using `size` property and three diffent value  */}
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

                    {/* The color can changed for every button by using `color` property with some value */}
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
                            Primary
                        </Button>
                        <Button 
                            color="secondary"
                            paragraph='<Button color="secondary" />' 
                        >
                            Secondary
                        </Button>
                        <Button 
                            color="danger"
                            paragraph='<Button color="danger" />' 
                        >
                            Danger
                        </Button>
                    </div>

                    {/* This is just for testing the button that the style can still apply when using different property at the same time */}
                    <div className="wrapper">
                        <Button 
                            size="lg"
                            variant="outline"
                            color="danger"
                            disableShadow
                            paragraph='<Button size="lg" variant="outline" color="secondary" disableShadow />' 
                        >
                            Testing
                        </Button>
                    </div>
                </section>
            </article>
        )
    }
}

export default App;