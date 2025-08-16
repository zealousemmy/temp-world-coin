import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

const getProfile = async () => {
  try {
    const response = await APIs.get(`/fetch-user`);

    if (response?.status === 200) {
      toast("User Data Successful");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getWallet = async () => {
  try {
    const response = await APIs.get(`/get-wallet`);

    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const transactions = async () => {
  try {
    const response = await APIs.get(`/transactions`);

    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const depositHistory = async () => {
  try {
    const response = await APIs.get(`/deposit-history`);

    console.log(response, "deposits response");
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getPlans = async () => {
  try {
    const response = await APIs.get(`/plans`);

    if (response?.status === 200) {
      // toast("User Data Successful");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const editAdmin = async (payload) => {
  try {
    const response = await APIs.patch(`/admin_edit_user`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const changePassword = async (payload) => {
  try {
    const response = await APIs.post(`/change-password`, payload);
    console.log(response, "response")
    if (response?.status === 200) {
      toast("password updated successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const editAdminProfilePic = async (payload) => {
  try {
    const response = await APIs.patch(`/admin_update_profile`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const profileService = {
  editAdmin,
  getProfile,
  editAdminProfilePic,
  changePassword,
  getWallet,
  transactions,
  depositHistory,
  getPlans,
};

export default profileService;
