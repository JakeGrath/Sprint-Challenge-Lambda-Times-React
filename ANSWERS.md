What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    When passing props to components, PropTypes are used to validate the type of data being passed through, i.e: string, number, object, etc. If we didn't
    validate this data, our components may not function as intended(or may not function at all). We can check the console log to make sure that no errors
    are printed when we run our pages.

Describe a life-cycle event in React?

    The life-cycle comprises of three steps;
        Mounting- This happens when the app first loads. It could be thought of as the 'birth' of the component.

        Updating- This happens to a component when their contents have changed.

        Unmount- This is the 'death' of the component. This happens when the component is no longer needed and is 
        removed from the Virtual DOM.
    
    React is a JavaScript Library that allows us to build dynamic components that 'reacts' based on user inputs and
    current states. Components would constantly be going through their life-cycles, otherwise we could use just plain HTML
    to build static pages.

Explain the details of a Higher Order Component?

    I'll need more practice with Higher Order Components, however, from my understanding- They are functions that allow
    us to take in and return components.

What are three different ways to style components in React? Explain some of the benefits of each.

    Using a .CSS file or a CSS compiler such as LESS or SASS-
    This allows us to separate and write CSS in a completely different file and import it into our file.
    It is the easiest to use in my opinion, since classes, tags, and other selectors can just be referenced and pulled
    from those files.

    Inline Styling- This allows us to directly write CSS in our html tags. It is ugly in my opinion, but it allows us
    to easily reference what styles are used in each component.

    Styled Components- This is a library that allows us to write CSS as though they are variables directly into our JavaScript.
    It seems a bit unintuitive at first, but in my opinion, I find it is useful for writing custom tags that have built in CSS
    to keep my component tags looking nice and clean in my editor.

