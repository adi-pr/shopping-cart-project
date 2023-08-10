import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../index.css"

const Button = ({ content }) => {
    return (
        <Link to="/store">
            <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">{content}</span>
                </span>
            </button>
        </Link>
    );
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
}

export default Button;
