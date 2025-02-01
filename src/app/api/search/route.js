"use server"; // First version on server search ? N\Do not use

import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export const GET = async (req, res) => {
  try {
    const q = req.nextUrl.searchParams.get("q");
    console.log("Search GET ===>", q);

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
