import "./app.css";
import { useState } from "react";

const TwitterFolowCard = ({ name, userName}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }
  const text = isFollowing ? "Unfollow" : "Follow";

  return (
    <div>
      <article>
        <header>
          <img src={`https://unavatar.io/${userName}`} alt="avatar" />
          <div>
            <strong>{name}</strong>
            <span>@{userName}</span>
          </div>
        </header>

        <aside>
          <button onClick={handleClick}>{text}</button>
        </aside>
      </article>
    </div>
  );
};

export default TwitterFolowCard;
