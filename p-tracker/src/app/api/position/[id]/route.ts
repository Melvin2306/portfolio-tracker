import { prisma } from "../../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const position = await prisma.position.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(position);
  } catch (error: any) {
    console.log(error);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    let json = await request.json();

    const updated_feedback = await prisma.position.update({
      where: { id },
      data: json,
    });

    return NextResponse.json(updated_feedback);
  } catch (error: any) {
    console.log(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    await prisma.position.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    console.log(error);
  }
}
