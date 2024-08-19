import React, { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import Events from "../components/Events";
import Registration from "../components/Registration";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";

const PerfilView = () => {
  const { user } = useAuth();

  return (
    <>
      <PagesBannerView />
      <UserProfile userId={user.uid} />
      <Registration userId={user.uid} />
      {/* <Events userId={user.uid} /> */}
    </>
  );
};

export default PerfilView;

{
  /* <p>Este es el perfil de {user.email}</p>
            <p>User ID is {user.uid}</p> */
}
