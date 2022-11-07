import PropTypes from 'prop-types'
import Button from './button'

// header js , it contains the title and button displayed on the homepage
const Header = (props) => {

    return (
        <header className="header">
            <h1 className='title'>{props.title}</h1>
            <Button />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// You can add CSS to JS 
// const headingStyle = {
//     color: 'blue',
//     backgroundColor:'black',
// }

export default Header