import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = join(process.cwd(), "dist");
const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const types = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".svg": "image/svg+xml" };
const server = createServer(async (request, response) => {
  const requestedPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const pathname = basePath && requestedPath.startsWith(`${basePath}/`) ? requestedPath.slice(basePath.length) : requestedPath;
  let target = normalize(join(root, pathname));
  if (!target.startsWith(root)) { response.writeHead(403).end(); return; }
  try {
    if ((await stat(target)).isDirectory()) target = join(target, "index.html");
    const info = await stat(target);
    response.writeHead(200, { "content-type": types[extname(target)] ?? "application/octet-stream", "content-length": info.size });
    createReadStream(target).pipe(response);
  } catch { response.writeHead(404).end("Not found"); }
});
server.listen(4173, "127.0.0.1", () => console.log("http://127.0.0.1:4173"));
