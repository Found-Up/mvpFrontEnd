import { User } from "../../../types/users/user.types";

export const NcuProfilePageLoader = async () => {
  const userData: User = JSON.parse(localStorage.getItem('user') || "");
  const ncu_id = userData.ncu_id;
  const access_token = userData.access_token;
  const response = await fetch(process.env.REACT_APP_API_URL + 'api/v1/NcuService/GetUserProfile/' + ncu_id, {
    method: 'GET',
    headers: { 
      'Authorization': `Bearer ${access_token}`,
    },
  });
  const userProfileData = await response.json();
  return userProfileData;
}