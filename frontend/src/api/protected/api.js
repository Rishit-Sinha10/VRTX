import { adminAuth } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";
export async function GET(req) {
  const authHeader = req.headers.get("authorization") || "";
  const token = authHeader.split("Bearer ")[1];
  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }
  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return NextResponse.json({ message: `Hello ${decoded.email}`, uid: decoded.uid });
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}