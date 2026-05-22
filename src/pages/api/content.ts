import type { APIContext } from "astro";
import { contentRepository } from "../../repositories/content.repository";

export async function GET(context: APIContext): Promise<Response> {
  const lang = context.url.searchParams.get("lang") || "en";
  const overrides = await contentRepository.getOverrides(lang);
  return new Response(JSON.stringify(overrides), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}