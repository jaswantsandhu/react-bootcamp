import PropTypes from "prop-types";
import noFunction from "../utils/nofunc";

export default function Message({ message, click }) {
    return <div onClick={click}>{message}</div>;
}

Message.defaultProps = {
    click: noFunction,
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    click: PropTypes.func,
};
