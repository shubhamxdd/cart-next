import { NextResponse } from "next/server";

import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    console.log({ email, password, name });

    const res =
      await sql`INSERT INTO users (email, password, name) VALUES (${email}, ${password}, ${name})`;
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "Registered" });
}
