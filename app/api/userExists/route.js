import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/login";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { phone } = await req.json();
    const user = await User.findOne({ phone }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
