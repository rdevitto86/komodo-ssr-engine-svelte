# TODO

> **Current Version:** V1

## V1 (Current)

> Status: Spec-only — openapi.yaml complete, no routes implemented. Bun runtime, Fargate, port 7003, private-only.

### Open Items

- **[M]** Implement `POST /v1/render` — accept component identifier and props, server-side render the specified SvelteKit component tree, return HTML fragment and cache-hit flag; use Bun's native SSR APIs; apply cache key derivation (component + props hash if `cache_key` not supplied)
- **[M]** Implement `POST /v1/admin/content/invalidate` — accept a list of cache keys and evict the corresponding rendered fragments from the in-process or Redis cache; M2M JWT required
- **[M]** Implement `POST /v1/admin/content/upsert` — insert or replace a content record in the SSR cache; useful for pre-warming critical pages; M2M JWT required
- **[M]** Choose and wire cache backend — in-process LRU for local dev; Redis (forge SDK) for production; TTL per render configurable via `ttl_seconds` in the request; default server TTL via env config
- **[L]** Add integration tests for render, invalidate, and upsert flows using a minimal SvelteKit component fixture
