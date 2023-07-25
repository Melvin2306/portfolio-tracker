import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { id } = request.params;
    const positions = await prisma.position.findMany({
      where: {
        id: Number(id),
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(positions);
  } catch (error: any) {
    console.log(error);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id } = request.params;
    const { body } = request;
    const position = await prisma.position.update({
      where: {
        id: Number(id),
      },
      data: body,
    });
    return NextResponse.json(position);
  } catch (error: any) {
    console.log(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = request.params;
    const position = await prisma.position.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(position);
  } catch (error: any) {
    console.log(error);
  }
}
