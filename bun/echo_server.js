import { serve } from "https://deno.land/std/http/server.ts";

async function handleRequest(req) {
    const res = new Response();
    res.body = req.body;
    return res;
}

serve(handleRequest, { port: 8080 });
