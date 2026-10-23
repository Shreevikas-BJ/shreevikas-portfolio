# Chatbot Evaluation

## Current Project-Only Policy

Run date: October 23, 2026 (America/Phoenix).
Current question list: [255 regression cases](chatbot-questions.md).

| Check | Result |
| --- | --- |
| Policy and real FAISS project retrieval | 255/255 passed |
| Website-internal probes at the API boundary | 56 probes passed, each with and without prior project context |
| Focused live API checks | 7/7 passed, including the three reported questions |
| Actual provider-generated answers in that live sample | 4 |
| Split-output disclosure checks | Passed; no generated fragment is released before checking the complete reply |
| Public named-project technology questions | Passed |
| Lint, production build, and TypeScript | Passed |

Internal-detail requests are rejected before retrieval or provider calls. Public chat retrieval includes only project documents. Complete short replies are checked before display, provider/configuration errors are generic, and refused topics are cleared from frontend follow-up memory. The existing model, temperature, output limit, timeout, input validation, and rate limiter are unchanged.

The broader canonical index and its independent skill/alias/retrieval tests are retained, but employment, profile, education, certification, research-role, and comparison documents are not used by public chat generation. No visitor emails or transcripts were collected. The live sample used the current local index; Supabase adapter/fallback behavior was tested independently.

The full 255-case corpus was tested for routing and retrieval, not for 255 live model generations. Mocked-provider tests cover output split across chunks, empty/interrupted output, model errors, timeouts, invalid input, and rate limits. Passing finite tests does not guarantee correctness for every future prompt. Public repository contents and browser assets are outside the assistant's disclosure policy.

```bash
npm test
npm run lint
npm run build
npm run test:chatbot:live -- --ids website-privacy-01,website-privacy-02,website-privacy-03,project-scope-08,project-scope-01,public-project-tools-01,project-follow-up-04
```

## Historical Broader-Background Evaluation

The results below describe the superseded policy, not the current project-only assistant.

Run date: October 5, 2026 (America/Phoenix).
Original corpus: 300 regression questions.

## Results

| Check | Result |
| --- | --- |
| Initial policy/retrieval baseline | 218/300 passed; 82 failures |
| Final policy and real MiniLM/FAISS retrieval | 300/300 passed |
| Actual Next.js API handler responses | 300/300 passed |
| Groq-backed answer cases | 236 |
| Local responses and validation cases | 64 |
| Lint | Passed, zero warnings |
| Production build and TypeScript | Passed |
| Traced chatbot function bundle | 127.9 MiB locally |

The model remains `openai/gpt-oss-20b`, with temperature 0.2, a 180-token output limit, low reasoning effort, and streaming. Tests cover 21 groups: 52 skills, 18 aliases, 44 project questions, 8 project paraphrases, 8 links, 18 experience questions, 8 false premises, 8 research questions, 6 education questions, 8 certifications, 6 profile questions, 28 cloud comparisons, 8 unknown tools, 10 conversational questions, 6 resume requests, 12 private questions, 16 unrelated questions, 12 prompt injections, 12 follow-ups, 6 false-positive checks, and 6 invalid requests.

## Fixes

- Route professional, private, unrelated, resume, greeting, and identity questions through one shared policy.
- Retrieve actual internship/manufacturing responsibilities instead of supplying only role titles.
- Recognize employer/project aliases and explicit certification, education, research, and contact intents.
- Keep RandomForestRegressor customer-value regression separate from RandomForestClassifier treatment/control uplift and the separate churn notebook.
- Prevent a provider word inside an unlisted cloud service from implying direct service experience.
- Prefer documented tool examples in cloud comparisons; preserve skill-only use without inventing a job/project association.
- Retain one bounded topic through consecutive follow-ups and switch when a new named topic appears.
- Correct unsupported employer/credential premises without inventing employment or certification.
- Treat empty, interrupted, and timed-out responses as errors with retry, not successful contact replies.
- Validate previous-question input and prevent it from overriding privacy, resume, or unrelated-question policies.

## Method And Limits

The offline suite uses real embeddings and native FAISS. Provider-failure tests separately stub Groq to exercise malformed input, stream fragmentation, empty/interrupted streams, timeouts, token-field compatibility, model errors, authentication errors, and rate limiting.

The live evaluator calls the actual API handler in-process and reads its streaming/JSON response. It paces provider usage and checks unsupported claims, wrong credential links, public resume URLs, unnecessary contact fallbacks, and links/percentage metrics absent from retrieved facts. Truthful denials and paraphrases are accepted; grader self-tests reject the corresponding invented claims.

Successful prior answers are reused only for matching API policy, payload, model configuration, and actual model inputs. Assertions are rerun; changed/failed cases are regenerated. The final resume pass retained 297 matching cases and retested 3 local/validation cases. All 236 Groq-backed cases represent actual generated answers, not mocks or fixed professional FAQs.

Measured in-process Groq-backed handler latency had a 356 ms median and a 2,540 ms maximum. These measurements exclude test pacing and initial evaluator preparation; they are not promises about browser latency or Vercel cold starts.

Browser checks exercised name, internship, immediate follow-up, retry without duplicate user messages, input locking/re-enabling, and a 390px viewport. Supabase adapter/fallback behavior was tested, but this evaluation used the local canonical index, not a live Supabase project. Rate limiting is per function instance, not distributed. Passing this finite suite does not guarantee that every future prompt or stochastic model output will be correct.

## Reproduce

```bash
npm test
npm run lint
npm run build
npm run test:chatbot:live
npm run test:chatbot:live -- --resume
```

The live command requires local server-only Groq credentials and consumes provider quota. Generated detailed results stay in ignored `data/generated/`; no real visitor emails or transcripts are used.
