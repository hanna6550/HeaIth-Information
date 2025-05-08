import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/login";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, phone, password } = await req.json();

    // Check if fields are empty
    if (!name || !phone || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();

    // Check if user already exists (you may want to implement this check)
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    await User.create({ name, phone, password: hashedPassword });

    return NextResponse.json({ message: "User registered successfully." }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user.", error: error.message },
      { status: 500 }
    );
  }
}
