import { useToggle } from "../hooks/useToggle";

const Like = () => {
    const [isLiked, toggle] = useToggle(false);

    return (
        <div className="like-btn">
            <button onClick={toggle} className={isLiked ? "liked" : ""}>
                <span>{isLiked ? "Unlike" : "Like"}</span>
            </button>
        </div>
    );
};

export default Like;
