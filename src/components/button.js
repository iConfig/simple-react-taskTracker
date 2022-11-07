// button.js component to display the button on home page

import PropTypes from 'prop-types'

const Button = (props) => {

    const onclick = () => {
        console.log("React")// this prints 'react' on the console when clicked 
    }

    return (
        <button className='btn' onClick={onclick} >{props.Name}</button>
    )
}
// defining default props 
Button.defaultProps = {
    Name: 'My Tasks',

}

Button.propTypes = {
    Name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button