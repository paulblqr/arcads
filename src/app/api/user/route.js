import { NextResponse } from "next/server";

export async function POST(request) {
  const { isExisting, email } = await request.json();
  if (!email) {
    return NextResponse.json({}, { status: 404, statusText: "Invalid Email" });
  }
  return NextResponse.json({ status: 200, isExisting });
}
