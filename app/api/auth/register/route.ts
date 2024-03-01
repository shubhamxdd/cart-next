import { NextResponse } from "next/server";

import { sql } from "@vercel/postgres";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    // check if email already exists

    const userRes = await sql`SELECT * FROM users WHERE email = ${email}`;
    const user = userRes.rows[0]
    if (user) {
      return NextResponse.json({ message: "User already exists" });
    }

    const hashedPassword = await hash(password, 10);

    console.log("From register api route", { email, password, name });

    const res =
      await sql`INSERT INTO users (email, password, name) VALUES (${email}, ${hashedPassword}, ${name})`;
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "Registered" });
}
