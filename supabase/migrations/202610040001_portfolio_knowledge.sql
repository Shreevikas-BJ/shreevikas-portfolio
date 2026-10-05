create table if not exists public.portfolio_knowledge (
  id text primary key,
  kind text not null,
  content text not null,
  embedding real[] not null check (array_length(embedding, 1) = 384),
  embedding_model text not null,
  revision text not null,
  updated_at timestamptz not null default now()
);

alter table public.portfolio_knowledge enable row level security;
revoke all on public.portfolio_knowledge from anon, authenticated;
grant select, insert, update, delete on public.portfolio_knowledge to service_role;
create index if not exists portfolio_knowledge_revision_idx on public.portfolio_knowledge (revision);

comment on table public.portfolio_knowledge is 'Public portfolio facts and normalized embeddings; server-only access. No visitor messages or personal data are stored.';
