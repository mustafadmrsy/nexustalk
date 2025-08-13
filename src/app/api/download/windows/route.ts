import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const envUrl = process.env.NEXT_PUBLIC_WINDOWS_URL;
  const fallback =
    "https://github.com/mustafadmrsy/nexustalk/releases/latest/download/" +
    encodeURIComponent("Nexus.Setup.1.0.3.exe");
  const target = envUrl || fallback;
  return NextResponse.redirect(target, 302);
}


