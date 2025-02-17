"use server";

import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export const GET = async (req, res) => {
  try {
    const q = req.nextUrl.searchParams.get("q");

    if (typeof q !== "string") {
      return NextResponse.json(
        {
          message: "Invalid request",
          error,
        },
        { status: 404 }
      );
    }

    const posts = await prisma.post.findMany({
      where: {
        OR: [
          {
            text: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            title: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            author: {
              contains: q,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка параметров поиска", error },
      { status: 500 }
    );
  }
};
