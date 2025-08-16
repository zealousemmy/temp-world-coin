import { createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profile-service";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (thunkAPI) => {
    try {
      const delivered = await profileService.getProfile();

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getWallet = createAsyncThunk(
  "profile/getWallet",
  async (thunkAPI) => {
    try {
      const delivered = await profileService.getWallet();

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getPlans = createAsyncThunk(
  "profile/getPlans",
  async (thunkAPI) => {
    try {
      const delivered = await profileService.getPlans();

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getTansactions = createAsyncThunk(
  "profile/transactions",
  async (thunkAPI) => {
    try {
      const delivered = await profileService.transactions();

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const depositHistory = createAsyncThunk(
  "profile/depositHistory",
  async (thunkAPI) => {
    try {
      const delivered = await profileService.depositHistory();

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const EditAdminProfile = createAsyncThunk(
  "profile/edit_profile_admin",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await profileService.editAdmin(requestData);

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const changePassword = createAsyncThunk(
  "profile/edit_admin_password",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await profileService.changePassword(requestData);

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const EditAdminProfilePic = createAsyncThunk(
  "profile/edit_profile_pic_admin",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await profileService.editAdminProfilePic(requestData);

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      //   return thunkAPI.rejectWithValue(e.response.data);
      throw e;
    }
  }
);
