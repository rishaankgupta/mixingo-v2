# Mixingo Startup Document

## Overview
Mixingo is a private-beta translation product built around a simple idea: code-mixed language should be a translation target, not only an input that gets cleaned into standard language. The product supports three direction classes across web and API:

1. **Standard → hybrid:** turn a standard language into a supported everyday mix such as Hinglish or Spanglish.
2. **Hybrid → standard:** translate code-mixed, transliterated, informal language into a selected standard target.
3. **Hybrid → hybrid:** move between selected code-mixed styles without forcing the meaning through textbook language as the user-facing result.

Coverage is direction-specific. Saying that Mixingo supports “Hinglish” does not imply every source language, target language, script, register, or hybrid-to-hybrid combination is already available. Individual directions should be labelled Supported, Experimental, or Planned during beta.

## Core Product Difference
Broad translation products cover far more standard languages and platform workflows, and they may process some mixed-language input. Standalone English-to-Hinglish and Spanglish generators also exist. Mixingo should therefore not claim that no other tool can ever understand or produce hybrid language.

Mixingo’s defensible differentiation is the integrated product model: named hybrid styles are explicit sources and targets; multiple direction classes share one web and API experience; direct text and complete files use the same translation model; and coverage, benchmarks, and known misses are disclosed by direction.

## Translation Direction Model

| Direction | Product role | Example intent |
|---|---|---|
| Standard → hybrid | Core differentiator | English → natural Hinglish for a lesson, message, or document |
| Hybrid → standard | Core direction | Hinglish → clear English for support or comprehension |
| Hybrid → hybrid | Selected beta directions | Hinglish → Spanglish for a multilingual community workflow |

The requested target should make the output mode explicit: standard or code-mixed, target style, script, and social register. Meaning and relationship should be preserved, then expressed in the selected target rather than flattened into one default voice.

## Text, API, and File Parity
The web translator and full-access API expose the same direction model. API access is not a reduced text-only tier.

Mixingo supports direct text and complete-file translation for PDF, TXT, DOCX, and ebook files. A user can translate a standard-language book into a supported everyday mix, translate a hybrid document back into standard language, or use a selected hybrid-to-hybrid direction. The result should remain a file rather than becoming a plain-text dump.

For straightforward files, the goal is that nearly everything remains as-is except the translated words: structure, spacing, images, typography, and layout should stay near-original. Complex PDFs with scanned pages, dense columns, overlapping layers, unusual fonts, image-based text, or highly designed layouts use best-effort preservation; some image text may remain unchanged.

## Target Users

### Everyday users
People can translate messages, posts, captions, comments, and documents into the form they need: standard for clarity or code-mixed for natural everyday communication.

### Students
Students can translate difficult standard-language notes, research papers, book chapters, or ebooks into a more familiar supported mix, or translate code-mixed study material into a standard target. Complete-file workflows preserve visual context as closely as possible.

### Developers and startups
Developers can use the API for standard-to-hybrid generation, hybrid-to-standard understanding, selected hybrid-to-hybrid communication, chat, support, onboarding, communities, marketplaces, and document workflows.

### Businesses
Teams can clarify incoming mixed-language support messages for agents and generate outgoing replies in the supported mix their customers actually use.

### Creators and community builders
Creators can adapt standard-language captions, hooks, announcements, and educational material into selected code-mixed styles without treating the mix as random decoration.

## Product Model
Web and API usage share one account-level allowance. API limits apply at the account level rather than separately per key. Before general availability, Mixingo must publish direction-level coverage, document-character accounting, file-size/page-count limits, and any differences among text and file workflows.

## Pricing and Limits

### Anonymous users
- Up to 1,000 characters per web translation
- Up to 5 web translations per minute
- Up to 10,000 characters per day

### Free signed-up users
- 2,500 characters per web translation
- 10 web translations per minute
- API access at 10 requests per minute
- 5,000 characters per API request
- Unified daily cap of 100,000 characters
- Unified monthly cap of 250,000 characters
- Up to 2 active API keys

### Paid users
- 5,000 characters per web translation
- 30 web translations per minute
- API access at 30 requests per minute
- 10,000 characters per API request
- Unified daily cap of 250,000 characters
- Unified monthly cap of 1,000,000 characters
- Up to 5 active API keys

The paid monthly plan is $3.99. The introductory annual price is $29.99 for the first 1,000 users, after which it becomes $39.99 per year. Annual plans use monthly allowance resets rather than one pooled annual bucket.

## Positioning and Claim Guardrails
- Lead with standard → hybrid, hybrid → standard, and selected hybrid → hybrid—not only “understands messy input.”
- Describe supported hybrid styles as sources and targets.
- Do not claim universal superiority over Google Translate, DeepL, Azure, general AI models, or specialist generators.
- “Not listed in public documentation” must never be rewritten as “cannot do it.”
- Keep private-beta qualifiers and distinguish product intent from measured results.
- Publish raw inputs, settings, versions, outputs, and an evaluation rubric before presenting a single example as a benchmark.
- Never fabricate testimonials, usage volume, benchmark results, or conversion impact.

## Landing Page Positioning
The homepage should answer the product question in its first paragraph: Mixingo translates standard language into supported code-mixed styles, code-mixed language back into standard targets, and selected hybrid styles into one another. Existing sections should then prove each direction through clearly labelled illustrative examples.

The document section should lead with the user outcome: upload a standard-language book, PDF, DOCX, TXT file, or ebook and get it back in a supported everyday mix while retaining the document; the same workflow also works in reverse or between selected mixes.

## Example Use Cases

### Standard → hybrid learning
A student uploads an English PDF and requests natural Hinglish so the material reads closer to everyday speech while retaining its original structure.

### Hybrid → standard support
A support team translates an incoming Hinglish or Taglish ticket into clear standard English while retaining urgency and social tone.

### Hybrid → hybrid community communication
A community workflow moves a supported Hinglish message into a selected Spanglish style without presenting textbook English as the final output.

### API document workflow
A product sends a PDF, DOCX, TXT file, or ebook through the API, selects a standard or hybrid target, and receives a translated file back with best-effort layout preservation.

## Research and Market Context
- [Google Cloud Translation supported languages](https://docs.cloud.google.com/translate/docs/languages) documents language-code-based source and target support plus transliteration for listed languages.
- [DeepL supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) documents language and style availability.
- [Azure Translator language support](https://learn.microsoft.com/azure/cognitive-services/translator/language-support) documents text, document, transliteration, and custom-model coverage.
- [WMT 2022 code-mixed translation research](https://arxiv.org/abs/2210.12215) addresses both English/Hindi-to-Hinglish and Hinglish-to-English tasks.
- [LREC-COLING 2024 research](https://arxiv.org/abs/2403.16771) describes code-mixed translation challenges including data scarcity and noisy real-world input.
- Standalone [English-to-Hinglish](https://englishtohinglish.com/) and [Spanglish](https://musely.ai/tools/spanglish-translator) generators demonstrate why Mixingo must sell integrated breadth and explicit direction coverage rather than an untrue “nobody else can generate a mix” claim.

## Company Summary
Mixingo is a focused translation company for the way multilingual people understand **and produce** language. Its core is explicit standard-to-hybrid, hybrid-to-standard, and selected hybrid-to-hybrid translation across text, complete files, web, and API. The company should compete through clear product scope, natural target control, transparent testing, and honest limitations.
