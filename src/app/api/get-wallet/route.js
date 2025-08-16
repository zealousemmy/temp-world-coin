import { requireAuth } from "@/server/api-helpers/auth";
import AuthController from "@/server/service";
import WalletController from "@/server/service/wallet";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const user = requireAuth(req.headers);
    const auth = new WalletController();
    const { data } = await auth.GetWallet({ user_id: user._id });
    console.log(data, "wallet data");
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
