---
inclusion: auto
---

# Mixingo product capability boundaries

- Mixingo's core positioning is explicit translation in three direction classes: standard language to a supported code-mixed style, code-mixed language to a standard target, and selected code-mixed to code-mixed translation.
- Hybrid styles such as Hinglish, Spanglish, Taglish, Singlish, Arabizi, and Manglish are first-class sources and targets—not merely noisy inputs that Mixingo cleans into standard language.
- Coverage is direction-specific. Do not imply that every possible source, target, script, or hybrid-to-hybrid combination is supported; distinguish supported, experimental, and planned beta directions.
- Both the web translator and API provide the full product capability. Never describe file translation as web-only or the API as text-only/reduced access.
- Mixingo supports direct text translation and complete-file translation for PDF, TXT, DOCX, and ebook files. File workflows can target a standard language or supported hybrid style in the same way as direct text.
- File translation should return a translated file rather than a plain-text dump and preserve structure, spacing, images, typography, and layout as closely as possible.
- Describe straightforward files as near-original in most cases, while clearly stating that complex PDFs—such as scanned pages, dense columns, overlapping layers, image-based text, unusual fonts, and highly designed layouts—use best-effort preservation and may not be pixel-perfect.
- Do not claim that no other translator or AI can process or generate hybrid language. Broad translators may handle some mixed input, and standalone Hinglish/Spanglish generators exist. Mixingo's defensible differentiation is its integrated, explicit scope across multiple hybrid source and target directions, text and complete files, web and API.
- The landing-page repository does not contain the production translation backend. Do not infer from that separation that the advertised translation capabilities are unsupported.
