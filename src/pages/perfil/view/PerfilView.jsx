import React, { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import Events from "../components/Events";
import Registration from "../components/Registration";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";
import { useProfile } from "../hooks/useProfile";
import AdminProfile from "../components/AdminProfile";

const PerfilView = () => {
  const { user } = useAuth();
  const { loading, userData } = useProfile(user.uid)
  console.log("El rol del usuario es: ", userData?.role)

  return (
    <>
<<<<<<< HEAD
      <PagesBannerView />
      {
        userData?.role === 'admin' ?
          (
            <AdminProfile userId={user.uid} />
          ) : (
            <>
              <UserProfile userId={user.uid} />
              <Registration userId={user.uid} />
            </>
          )
      }

=======
      <PagesBannerView title={"Mi perfil"}/>
      <UserProfile userId={user.uid} />
      <Registration userId={user.uid} />
>>>>>>> feature/registration
      {/* <Events userId={user.uid} /> */}
    </>
  );
};

export default PerfilView;

{
  /* <p>Este es el perfil de {user.email}</p>
            <p>User ID is {user.uid}</p> */
}
