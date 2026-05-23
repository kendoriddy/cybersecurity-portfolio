# owasp.diff — Vulnerable vs Secure, side by side

An educational web app that shows the **same feature** implemented two ways — **Vulnerable** and **Secure** — for 8 vulnerabilities from the OWASP Top 10. Each lesson has a working exploit you can run in your browser and the hardened fix that blocks the same payload.

> Built with TanStack Start (React 19 + Vite). All "attacks" run against in-memory seeded data inside sandboxed server functions — nothing persists, nothing leaves your environment.

## Lessons

| #   | Vulnerability             | OWASP                       | Demo                                               |
| --- | ------------------------- | --------------------------- | -------------------------------------------------- |
| 1   | SQL Injection             | A03 — Injection             | `admin' --` bypasses the password check            |
| 2   | Stored XSS                | A03 — Injection             | `<img onerror=…>` runs for every visitor           |
| 3   | Insecure Token Storage    | A07 — AuthN Failures        | localStorage JWT exfiltrated via XSS               |
| 4   | IDOR                      | A01 — Broken Access Control | Fetch another user's order by id                   |
| 5   | Sensitive Data Exposure   | A02 — Crypto Failures       | Plaintext passwords vs bcrypt                      |
| 6   | Security Misconfiguration | A05                         | Verbose stack traces vs sanitized errors + headers |
| 7   | CSRF                      | A01 — Broken Access Control | Cross-site `<img>` triggers a transfer             |
| 8   | SSRF / Open Redirect      | A10                         | Server fetches cloud metadata endpoint             |

## How each lesson is shaped

Every lesson page contains:

- **Vulnerable code** and **Secure code** side by side, with the changed lines highlighted
- **A live demo** pre-loaded with a real payload — switch the toggle to run the same payload against the secure endpoint
- **Plain-English explainers**: what went wrong, why the fix works, how to think about it in production

## Sample diff — SQL Injection

```ts
// ❌ Vulnerable: string concatenation
const query =
  "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
const rows = db.execute(query);
```

```ts
// ✅ Secure: parameterized query
const rows = db.execute("SELECT * FROM users WHERE username=? AND password=?", [
  username,
  password,
]);
```

**Why the fix works.** The database receives the query template and the values as two separate inputs. The values are never parsed as SQL, so `admin' --` is just a 9-character username string — the trailing `--` can't comment anything out.

## Sample diff — XSS

```ts
// ❌ Vulnerable
div.innerHTML = comment.body;
```

```ts
// ✅ Secure
div.textContent = comment.body;
// or, for rich content:
div.innerHTML = DOMPurify.sanitize(comment.body);
```

**Why the fix works.** `textContent` writes characters, not markup, so `<` becomes a literal `<` on screen instead of opening a tag. `DOMPurify` keeps a strict allow-list of safe tags and strips every event handler.

## Sample diff — Insecure Token Storage

```ts
// ❌ Vulnerable — readable by any script on the page
localStorage.setItem("token", token);
```

```http
# ✅ Secure — set by the server, invisible to JavaScript
Set-Cookie: session=…; HttpOnly; Secure; SameSite=Lax; Path=/
```

**Why the fix works.** `HttpOnly` prevents `document.cookie` from ever seeing the token, so even a successful XSS can't steal it. `SameSite=Lax blocks the cookie from riding on cross-site sub-requests (like cross-origin scripts or images), mitigating CSRF as a bonus.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed URL (default http://localhost:3000).

## Deploy (Vercel or Netlify)

This app uses **TanStack Start with SSR** and API routes (`/api/demo/*`). It must not be deployed as a static site only (e.g. `publish = dist/client` on Netlify) — that causes the host’s generic “Page not found” error.

1. **Build command:** `npm run build`
2. **Install command:** `npm install` (or `bun install` if you use Bun on the host)
3. **Do not** set a static publish directory on Netlify; `netlify.toml` in this repo is already configured for TanStack Start + Nitro.
4. On **Vercel**, import the repo as a TanStack Start / Vite project; Nitro is included in `vite.config.ts` and Vercel will wire serverless functions automatically.
5. On **Netlify**, connect the repo and use the build settings from `netlify.toml` (or let Netlify auto-detect after the first deploy).

Redeploy after pulling these changes if you previously deployed with Cloudflare/Lovable settings.

Optional: set `SITE_URL` (e.g. `https://your-app.vercel.app`) in your host’s environment variables so link previews (`og:image`) use the correct absolute URL when shared.

## Disclaimer

The vulnerable code in this project is **intentional** and lives only inside clearly labeled `/api/demo/*` endpoints with seeded fake data. Do not copy the vulnerable branches into a real app. Do not paste real credentials into the demo forms.

## References

- [OWASP Top 10 (2021)](https://owasp.org/Top10/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
