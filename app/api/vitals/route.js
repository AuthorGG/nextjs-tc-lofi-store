export async function POST(request) {
  const data = await request.json();

  console.log("[API /vitals]", data);
  return new Response("ok");
}
