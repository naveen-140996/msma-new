import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      slug: "custom-software",
      title: "Custom Software & App Dev",
      description:
        "High-performance Web, Android, iOS, and Hybrid solutions using React, Node, and Java.",
      image: "/assets/images/service-1.jpg",
    },
    {
      id: 2,
      slug: "ecommerce-growth",
      title: "E-Commerce Growth Lab",
      description:
        "End-to-end marketplace management with listing optimization and pricing analysis.",
      image: "/assets/images/service-2.jpg",
    },
    {
      id: 3,
      slug: "ai-automation",
      title: "AI & Automation",
      description:
        "Streamlining workflows through intelligent AI agents and Low-Code / No-Code efficiency.",
      image: "/assets/images/service-3.jpg",
    },
  ]);
}
