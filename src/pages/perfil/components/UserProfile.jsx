import React from "react";
import { useProfile } from "../hooks/useProfile";

const UserProfile = ({ userId }) => {
  const { userData } = useProfile(userId);

  return (
    <div className="laptop1:ms-40 mt-3 rounded-tl-xl bg-White flex flex-col items-center p-10">

      <div className="w-full bg-white rounded-lg shadow-lightShadowGrey">
        <div className="w-full bg-Blue text-White p-2 font-semiBold">
          <h1>Datos del usuario:</h1>
        </div>
        <div className="p-5">
          <p>Nombre: {userData?.name}</p>
          <p>Apellido: {userData?.lastName}</p>
          <p>DNI: {userData?.dni}</p>
          <p>Cell: {userData?.cell}</p>
          <p>Categoría: {userData?.category}</p>
          <p>Email: {userData?.email}</p>
        </div>
      </div>

      {/* Show more user information */}
    </div>
  );
};

export default UserProfile;
