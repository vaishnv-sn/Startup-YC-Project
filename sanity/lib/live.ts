import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

const { sanityFetch, SanityLive } = defineLive({ client });

export { sanityFetch, SanityLive };
