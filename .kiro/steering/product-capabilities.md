---
inclusion: auto
---

# Mixingo product capability boundaries

- Mixingo supports direct text translation and complete-file translation for PDF, TXT, DOCX, and ebook files.
- Both the web translator and API provide the full product capability. Never describe file translation as web-only or the API as text-only/reduced access.
- File translation should return a translated file rather than a plain-text dump and preserve structure, spacing, images, typography, and layout as closely as possible.
- Describe straightforward files as near-original in most cases, while clearly stating that complex PDFs—such as scanned pages, dense columns, overlapping layers, image-based text, unusual fonts, and highly designed layouts—use best-effort preservation and may not be pixel-perfect.
- The landing-page repository does not contain the production translation backend. Do not infer from that separation that the advertised translation capabilities are unsupported.