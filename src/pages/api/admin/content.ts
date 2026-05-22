import type { APIContext } from "astro";
import { requireAdmin } from "../../../lib/admin-auth";
import { contentRepository } from "../../../repositories/content.repository";
import { z } from "zod";

const upsertSchema = z.object({
  page: z.string().min(1),
  section: z.string().min(1),
  key: z.string().min(1),
  lang: z.string().min(1),
  value: z.string()
});

export async function GET(context: APIContext): Promise<Response> {
  const lang = context.url.searchParams.get("lang") || "en";
  const page = context.url.searchParams.get("page");
  let rows;
  if (page) {
    rows = await contentRepository.getByPage(page, lang);
  } else {
    rows = await contentRepository.getAll(lang);
  }
  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

export async function POST(context: APIContext): Promise<Response> {
  const denied = requireAdmin(context);
  if (denied) return denied;

  try {
    const body = await context.request.json();
    const parsed = upsertSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
    }
    const { page, section, key, lang, value } = parsed.data;
    await contentRepository.upsert(page, section, key, lang, value);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

export async function DELETE(context: APIContext): Promise<Response> {
  const denied = requireAdmin(context);
  if (denied) return denied;

  const id = context.url.searchParams.get("id");
  if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });

  await contentRepository.delete(id);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}