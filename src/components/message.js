import PropTypes from 'prop-types';

export default function Message({ message })
    {
        return <div>{message}</div>
    }

Message.propTypes = {
    message : PropTypes.string.isRequired
}