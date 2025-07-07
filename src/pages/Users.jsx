import React, { useState } from "react";
import UsersList from "../components/users/UsersList";
import styled from "@emotion/styled";

const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
function Users() {
  const [usersData, setusersData] = useState([]);

  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      console.log(result);
      setusersData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getUsers();

  function resetList() {
    setusersData([]);
  }
  return (
    <div>
      <h2>
        Users 목록
        <button onClick={getUsers}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h2>
      <UsersGrid className="UsersGrid">
        {usersData.map((item, index) => {
          return (
            <UsersList
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              address={item.address}
              phone={item.phone}
              website={item.website}
              company={item.company}
              key={index}
            />
          );
        })}
      </UsersGrid>
    </div>
  );
}

export default Users;
