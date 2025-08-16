import { createSlice } from "@reduxjs/toolkit";
import {
  changePassword,
  EditAdminProfile,
  EditAdminProfilePic,
  getProfile,
  depositHistory,
  getTansactions,
  getWallet,
  getPlans,
} from "./profile_service_syn";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    profileLoader: true,
    editLoader: false,
    profileMessage: "",

    passUpdateSuccess: false,

    //wallet
    wallet: {},
    walletLoader: false,
    walletMessage: "",

    // transactions
    transactions: [],
    transactionLoader: false,
    transactionsMessage: "",

    // deposit history
    deposits: [],
    depositsLoader: false,
    depositsMessage: "",

    // plans
    plans: [],
    gettingPlans: false,
    getPlansSuccess: false,
    getPlansError: false,
    getPlansMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.profile = {};
      // state.profileLoader = true;
      state.editLoader = false;
      state.profileMessage = "";

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.profileLoader = true;
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.profileLoader = false;
        // state.profileMessage = payload?.message;
        state.profileMessage = "profile fetch success";
        console.log(payload);
        state.profile = payload?.data;
      })
      .addCase(getProfile.rejected, (state, { payload }) => {
        state.profileLoader = false;
        state.profileMessage = payload?.message;
      })
      .addCase(getPlans.pending, (state) => {
        state.gettingPlans = true;
      })
      .addCase(getPlans.fulfilled, (state, { payload }) => {
        state.gettingPlans = false;
        state.getPlansSuccess = true;
        state.plans = payload;
      })
      .addCase(getPlans.rejected, (state, { payload }) => {
        state.gettingPlans = false;
        state.getPlansError = true;
        state.getPlansMessage = payload?.message;
      })
      .addCase(getWallet.pending, (state) => {
        state.walletLoader = true;
      })
      .addCase(getWallet.fulfilled, (state, { payload }) => {
        state.walletLoader = false;
        // state.profileMessage = payload?.message;
        // state.profileMessage = "profile fetch success";
        console.log(payload);
        state.wallet = payload;
      })
      .addCase(getWallet.rejected, (state, { payload }) => {
        state.walletLoader = false;
        state.walletMessageMessage = payload?.message;
      })
      .addCase(getTansactions.pending, (state) => {
        state.transactionLoader = true;
      })
      .addCase(getTansactions.fulfilled, (state, { payload }) => {
        state.transactionLoader = false;
        console.log(payload);
        state.transactions = payload?.transactions;
      })
      .addCase(getTansactions.rejected, (state, { payload }) => {
        state.transactionLoader = false;
        state.transactionsMessage = payload?.message;
      })
      .addCase(depositHistory.pending, (state) => {
        state.depositsLoader = true;
      })
      .addCase(depositHistory.fulfilled, (state, { payload }) => {
        state.depositsLoader = false;
        console.log(payload);
        state.deposits = payload?.transactions;
      })
      .addCase(depositHistory.rejected, (state, { payload }) => {
        state.depositsLoader = false;
        state.depositsMessage = payload?.message;
      })
      .addCase(EditAdminProfile.pending, (state) => {
        state.editLoader = true;
      })
      .addCase(EditAdminProfile.fulfilled, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload?.message;
        state.profile = payload?.data;
      })
      .addCase(EditAdminProfile.rejected, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload?.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.editLoader = true;
      })
      .addCase(changePassword.fulfilled, (state, { payload }) => {
        state.editLoader = false;
        state.passUpdateSuccess = true;
        state.profileMessage = "success";
      })
      .addCase(changePassword.rejected, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload;
      })
      .addCase(EditAdminProfilePic.pending, (state) => {
        state.editLoader = true;
      })
      .addCase(EditAdminProfilePic.fulfilled, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload?.message;
        state.profile = payload?.data;
      })
      .addCase(EditAdminProfilePic.rejected, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload?.message;
      });
  },
});

export const { clearState } = profileSlice.actions;
export const profileSelector = (state) => state.profile;
