export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();
  const headers = { "Content-Type": "application/json" };
  try {
    const body = JSON.stringify({ id });
    return new Response(body, { headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers,
    });
  }
}
