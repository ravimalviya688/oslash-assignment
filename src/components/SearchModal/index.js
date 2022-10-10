import { Avatar, Select, Modal } from "antd";
import React, { useState } from "react";
import { list } from "../../utils/common";
import AccessPopover from "../AccessPopover";
import CardFooter from "../CardFooter";
import { ReactComponent as CrossIcon } from "../../assets/close.svg";

import "./index.css";
function SearchModal({ isModalOpen, handleCancel }) {
  const [peopleList, setPeopleList] = useState(list);
  const [selectList, setSelectedList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentAccess, setAccess] = useState("Full access");

  console.log("peopleList", peopleList);

  function handleChange(e) {
    let res = JSON.parse(JSON.stringify(list));
    console.log("res", res);
    for (let i = 0; i < res.length; i++) {
      let filtered = res[i].data.filter((val, ind) => {
        return (
          val.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        );
      });
      res[i].data = filtered;
    }
    setSearch(e.target.val);
    setPeopleList(res);
  }
  function handleClick(person) {
    let data = [...selectList];
    let check = data.filter((val) => val.name === person.name);
    if (check?.length === 0) {
      data.push({
        name: person.name,
        access: "Full access",
        desc: person.desc,
      });
      setSelectedList(data);
    }
  }
  function handleAccessClick(type) {
    setAccess(type);
    let data = [...selectList];
    for (let i = 0; i < data.length; i++) {
      data[i].access = type;
    }
    setSelectedList(data);
  }
  function handleInvite() {
    handleCancel([...selectList]);
    setSelectedList([]);
    setSearch("");
    setPeopleList(list);
  }
  function handleDeletetag(tag) {
    let data = [...selectList];
    let check = data.filter((val) => val.name !== tag.name);
    setSelectedList(check);
  }

  console.log("selectList", selectList);
  return (
    <Modal
      open={isModalOpen}
      footer={null}
      maskClosable={true}
      closable={false}
      onCancel={handleCancel}
    >
      <div className="search-bar">
        <div className="tag-search">
          {selectList &&
            selectList.map((tag) => {
              return (
                <div className="selected">
                  <h5>{tag.name}</h5>
                  <CrossIcon onClick={() => handleDeletetag(tag)} />
                </div>
              );
            })}
          <input
            className="search-box"
            placeholder={"Search emails, names or groups"}
            onChange={(e) => handleChange(e)}
            value={search}
          />
        </div>

        <div className="search-invite">
          <AccessPopover
            defaulAccess={currentAccess}
            handleAccessClick={handleAccessClick}
          />
          <button onClick={handleInvite}>Invite</button>
        </div>
      </div>
      <div className="person">
        {peopleList &&
          peopleList.map((item, ind) => {
            return (
              <div>
                <h4 className="person-title">{item?.title}</h4>
                {item.data.map((person, index) => {
                  return (
                    <div
                      className="person-name"
                      onClick={() => handleClick(person)}
                    >
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                      <h5>{person?.name}</h5>
                    </div>
                  );
                })}
                {item.data?.length === 0 && (
                  <div className="person-name">
                    <h5>No Data Found</h5>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <CardFooter type="search-window" />
    </Modal>
  );
}
export default SearchModal;
