import React from "react";
import UserProfile from "../components/UserProfile";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import Registration from "../components/Registration";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";
import { useProfile } from "../hooks/useProfile";
import AdminProfile from "../components/AdminProfile";

const PerfilView = () => {
  const { user } = useAuth();
  const { loading, userData } = useProfile(user.uid);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PagesBannerView title={"Mi perfil"} />
      {
        userData?.role === 'admin' ? (
          <AdminProfile userId={user.uid} />
        ) : (
          <>
            <UserProfile userId={user.uid} />
            <Registration userId={user.uid} />
          </>
        )
      }
    </>
  );
};

export default PerfilView;
