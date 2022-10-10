import webshare from "../../assets/webshare.svg";
import "./card.css";
import CardFooter from "../CardFooter/index.js";
import UserCard from "../UserCard";
import SearchModal from "../SearchModal";
import { useState } from "react";
function ShareMainCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invited, setInvited] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = (invitedList = []) => {
    setIsModalOpen(false);
    let data = [...invited];
    for (let i = 0; i < invitedList.length; i++) {
      let check = invited.filter((val) => val.name === invitedList[i].name);
      if (check?.length === 0) {
        data.push(invitedList[i]);
      }
    }
    setInvited(data);
  };

  return (
    <div className="card-wrapper">
      <UserCard
        title="Share to web"
        desc="Publish and share link with anyone"
        icon={webshare}
        type="webshare"
      />
      <hr />
      <div className="search-field">
        <input
          className="people-search"
          defaultValue={"People, emails, groups"}
          onClick={showModal}
        />
        <button className="invite">Invite</button>
      </div>
      {invited &&
        invited.map((user, ind) => {
          return (
            <UserCard
              title={user.name}
              desc={user.desc}
              icon={webshare}
              type="people"
              access={user.access}
            />
          );
        })}
      <CardFooter />
      <SearchModal handleCancel={handleCancel} isModalOpen={isModalOpen} />
    </div>
  );
}
export default ShareMainCard;
