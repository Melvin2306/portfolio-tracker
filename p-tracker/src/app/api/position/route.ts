import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  try {
    const positions = await prisma.position.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(positions);
  } catch (error: any) {
    console.log(error);
  }
}

export async function POST(request: NextApiRequest) {
  try {
    const { body } = request;
    const position = await prisma.position.create({
      data: body,
    });
    return NextResponse.json(position);
  } catch (error: any) {
    console.log(error);
  }
}
