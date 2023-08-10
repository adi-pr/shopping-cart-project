import PropTypes from "prop-types";
import "../index.css"

const Button = ({ content }) => {
    return (
        <button className="button">
            <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">{content}</span>
            </span>
        </button>
    );
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
}

export default Button;
