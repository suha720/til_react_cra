import styled from "@emotion/styled";
import React from "react";
const UsersCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border: 6px solid #ffb703;
  margin: 20px;
  padding: 20px;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-10px);
  }
  cursor: pointer;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
`;
const UsersName = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;
const UsersNamePlusEmail = styled.div`
  font-size: 13px;
  text-align: left;
  color: #999;
  margin-bottom: 10px;
`;
const UsersAddressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const UsersaAdress = styled.div`
  font-size: 12px;
  color: #767676;
  line-height: 1.6;
  margin-bottom: 10px;
  border: 4px solid #c8c8c8;
  padding: 8px;
  border-radius: 8px;
`;

function UsersList({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  const { street, suite, city, zipcode } = address;
  const { lat, lng } = address.geo;
  const { name: testName, catchPhrase, bs } = company;
  return (
    <UsersCard>
      <UsersName>
        {id} : {name}
      </UsersName>
      <UsersNamePlusEmail>
        {username} : {email}
      </UsersNamePlusEmail>
      <UsersAddressGrid>
        <UsersaAdress>street: {street}</UsersaAdress>
        <UsersaAdress>suite: {suite}</UsersaAdress>
        <UsersaAdress>city: {city}</UsersaAdress>
        <UsersaAdress>zipcode: {zipcode}</UsersaAdress>
        <UsersaAdress>lat: {lat}</UsersaAdress>
        <UsersaAdress>lng: {lng}</UsersaAdress>{" "}
      </UsersAddressGrid>
      <UsersaAdress>phone : {phone}</UsersaAdress>
      <UsersaAdress>company.name : {testName}</UsersaAdress>
      <UsersaAdress>company.CP : {catchPhrase}</UsersaAdress>
      <UsersaAdress>company.BS : {bs}</UsersaAdress>
    </UsersCard>
  );
}

export default UsersList;
