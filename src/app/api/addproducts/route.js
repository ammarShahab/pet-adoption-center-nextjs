import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  console.log(body);

  const petCollections = dbConnect("pets");
  const results = await petCollections.insertOne(body);

  return NextResponse.json(results);
};
