import { NextResponse } from "next/server";

export async function POST(request) {
  const { isExisting, email } = await request.json();
  if (!email) {
    return new Response("Invalid email", { status: 400 });
  }
  return NextResponse.json({ status: 200, isExisting });
}
