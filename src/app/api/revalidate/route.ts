import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// Appelé par FidelityApp quand la guinguette modifie son agenda ou ses infos
// pratiques : le site affiche la nouvelle version tout de suite.
// Protégé par le secret partagé SITE_REVALIDATE_SECRET.
export async function POST(request: Request) {
  const secret = process.env.SITE_REVALIDATE_SECRET;
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  revalidateTag("fidelityapp", { expire: 0 });
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
