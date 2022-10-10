import { ReactComponent as HelpIcon } from "../../assets/help.svg";
import { ReactComponent as LinkIcon } from "../../assets/link.svg";
import "./index.css";
function CardFooter({ type }) {
  return (
    <div
      className={`card-footer ${
        type === "search-window" ? "smallPadding" : "largePadding"
      }`}
    >
      <div className="card-help">
        <HelpIcon />
        <h6>learn about sharing</h6>
      </div>
      {type !== "search-window" && (
        <div className="card-link">
          <LinkIcon />
          <h6>Copy Link</h6>
        </div>
      )}
    </div>
  );
}
export default CardFooter;
