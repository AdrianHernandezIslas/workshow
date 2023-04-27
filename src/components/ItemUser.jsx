import React, { memo, useEffect } from "react";
const ItemUserComponent = ({ user }) => {
    useEffect(() => {
        console.log("render ItemUserComponent",user.name);
      });
  return (<li>{user.name}</li>);
};

export default memo(ItemUserComponent);