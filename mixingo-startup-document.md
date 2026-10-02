# Mixingo Startup Document

## Overview
Mixingo is a translation SaaS designed for the way multilingual people actually write online: mixed-language sentences, transliterated text, informal spelling, chat-style phrasing, and code-mixed communication that often breaks generic translation tools.[cite:298][cite:301][cite:306] Its core value is not “translate everything,” but to translate messy, real-world multilingual text more naturally for both normal users and developers who need this capability inside products and workflows.[cite:243][cite:299]

Mixingo is positioned as a focused alternative to broad translation platforms.[cite:243][cite:304] Its private-beta web product and API support pasted or submitted text as well as PDF, TXT, DOCX, and ebook files. API users receive the same complete translation capability available on the web rather than a reduced text-only surface. File translation is layout-aware: the goal is to return the same document with its text translated while preserving structure, spacing, images, typography, and page layout as closely as possible. Straightforward, text-led files should remain near-original. Dense columns, overlapping layers, scanned pages, unusual fonts, and heavily designed PDFs may vary, and text baked into images may remain unchanged; complex files must be presented as best-effort rather than pixel-perfect.

## What the Product Does
At its simplest, Mixingo's private-beta web translator lets users paste text or upload a supported file and receive output that is easier to understand, more natural, and better suited to code-mixed input than generic systems are typically optimized for.[cite:298][cite:301] For files, the output remains a document rather than becoming a plain-text dump. This matters because multilingual encoders and translation systems still struggle when text mixes languages, scripts, transliteration, and informal usage inside a single sentence, conversation, or document.[cite:298][cite:301][cite:306]

The product serves two main user groups. The first group is everyday users who want quick web translation without friction, including anonymous visitors who can try pasted text immediately and users who need complete PDF, TXT, DOCX, or ebook translation. The second group is developers, startups, and businesses that want full API access so they can integrate both text and file translation into chat, support, onboarding, community, document, or multilingual communication workflows.[cite:304][cite:305]

## Core Problem It Solves
Traditional translators are usually strongest when the input is clean, formal, and written in one language at a time. Real-world internet text often looks nothing like that: people mix languages mid-sentence, switch scripts, type phonetically, use slang, shorten words, and write in the tone they use on WhatsApp, Instagram, or chat apps.[cite:298][cite:301][cite:306]

Mixingo exists to solve that gap. Its promise is that users should not have to rewrite their text into perfect formal language just to get a useful translation. Instead, the product is designed around the reality of multilingual communication as it happens in chat, comments, captions, support messages, and day-to-day digital communication.[cite:243][cite:299]

## Target Users
### Everyday users
Mixingo is for people who want to understand messages, posts, captions, comments, difficult English text, and complete documents more naturally. Anonymous visitors can use the web text translator without logging in, which lowers friction and makes the product accessible to casual users who want to paste text and understand it fast. Private-beta users can also translate PDF, TXT, DOCX, and ebook files without manually extracting every passage.[cite:304]

### Students
Students can use Mixingo to upload notes, research papers, book chapters, ebooks, or other educational files and receive a translated version that remains familiar in structure and layout. They can also paste individual passages. The practical value is not only translation across languages, but translation into a more comfortable, familiar, mixed-language style that reduces comprehension friction.[cite:298][cite:301]

### Developers and startups
Developers can use Mixingo through the API for the full product range: direct text translation, PDF/TXT/DOCX/ebook translation, chat translation, support ticket translation, multilingual user-generated content flows, marketplace conversations, localized onboarding, and document workflows that return translated files instead of extracted text.[cite:304][cite:305]

### SMEs and businesses
Small businesses and startups can use Mixingo to communicate with multilingual customers more naturally through chatbots, support flows, lead qualification, and customer communication systems. Multilingual chatbot systems are valuable because customers engage more when conversations happen in the language they think in, and businesses can resolve simple support requests faster when language barriers are reduced.[cite:300][cite:302][cite:305]

### Creators and community builders
Content creators can use Mixingo to adapt captions, hooks, comments, community posts, and audience replies for multilingual audiences. The product’s value here is tone preservation and simplicity rather than enterprise localization complexity.[cite:243][cite:299]

## Product Model
The private-beta web product and API support two workflows: direct text translation and complete file translation for PDFs, TXT, DOCX, and ebooks. API access is not a limited text-only tier; it exposes the complete product capability for developers and automated workflows. File output is designed to preserve the source document rather than rebuild it as generic text: for straightforward files, nearly everything should remain as-is except the translated words. Complex PDFs with layered design, many images, scanned pages, dense columns, or unusual typography can produce less consistent layouts, and text baked into images may remain unchanged. The product must communicate those limits clearly while making maximum practical preservation the standard.

The product model is built around a unified usage system. Web usage and API usage count toward the same limits, and API limits apply at the account level rather than separately per key. This makes the product easier to explain and reduces abuse opportunities through key rotation or channel switching.[cite:304] Before general availability, Mixingo must define how translated document characters count toward that allowance and publish any file-size, page-count, or file-count limits rather than leaving users to guess.

## Pricing and Limits
Mixingo has three primary access levels.

### Anonymous users
Anonymous users can use the web translator without logging in. They can translate up to 1,000 characters per translation, make up to 5 web translations per minute, and translate up to 10,000 characters per day. This tier is designed for instant trial and low-friction discovery.

### Free signed-up users
Free signed-up users receive 2,500 characters per web translation, 10 web translations per minute, API access at 10 requests per minute, 5,000 characters per API request, a unified daily cap of 100,000 characters across web and API, a unified monthly cap of 250,000 characters across web and API, and up to 2 active API keys. These limits are shared across the account rather than per key.

### Paid users
Paid users receive 5,000 characters per web translation, 30 web translations per minute, API access at 30 requests per minute, 10,000 characters per API request, a unified daily cap of 250,000 characters across web and API, a unified monthly cap of 1,000,000 characters across web and API, and up to 5 active API keys. All limits are shared across the account and across all active keys.

### Monthly and yearly plans
The paid monthly plan is priced at $3.99 per month. The yearly plan offers the same monthly paid limits with monthly resets for 12 months, billed annually rather than as one pooled annual bucket. The introductory annual price is $29.99 per year for the first 1,000 users, after which the yearly plan moves to $39.99 per year.

## Why the Product Is Different
Mixingo’s differentiation comes from focus. It is not trying to be a giant enterprise localization suite or a universal workflow platform. It has a specific promise: better translation for mixed-language, informal, human text that generic tools often mishandle — whether that text is pasted directly, sent through an API, or contained in a supported document.[cite:243][cite:299] File translation extends that promise without replacing it: preserve the human meaning in the words and as much of the original file as technically possible.

That sharper positioning matters for both product and marketing. High-converting SaaS pages work best when the message clearly names the problem, the outcome, and the reason this product is different.[cite:243][cite:304] Mixingo’s strongest message is that most translators are built for clean single-language input, while Mixingo is built for how multilingual people actually write.[cite:298][cite:301]

## Landing Page Positioning
A web designer should think of Mixingo as a specialized translation product with a human, practical, internet-native personality. The page should not look like a generic AI startup promising everything to everyone. It should feel focused, specific, and confident about one painful problem: mixed-language text that normal translators do not handle well enough.[cite:243][cite:299][cite:304]

The best landing page structure includes a hero section, a live product preview or translation demo, a problem section explaining why generic translators fail, a “Why Mixingo” block, a dedicated PDF and file-translation section, a use-cases section, pricing, a FAQ, and a final call to action.[cite:304] The file section should name PDF, TXT, DOCX, and ebooks explicitly, promise near-original output for straightforward files, and state the complex-PDF limitation without hiding it. The primary CTA should be something like “Try Mixingo free” or “Start translating,” while “Book a demo” should remain a secondary CTA for serious businesses, developers, or API leads.[cite:299][cite:304]

## Example Use Cases
### Student comprehension
A student uploads a PDF research paper, DOCX set of notes, or ebook chapter — or pastes one difficult paragraph — and gets a more natural translation that is easier to follow and remember. For the complete-file flow, the translated result should preserve the original structure and visual context as closely as possible.

### Cross-language chat
A user receives a message, caption, or comment in a language or style they only partially understand and uses Mixingo to turn it into something more natural and readable.

### SaaS product integration
A startup uses the API to translate user chats, support tickets, buyer-seller messages, or onboarding content so that the product experience feels more natural across languages.[cite:305]

### Customer support and chatbot workflows
A business uses Mixingo to help a chatbot or support tool respond in clearer, simpler, more human multilingual language. Multilingual conversational systems can improve customer engagement and speed up support when users can communicate in the language they are most comfortable with.[cite:300][cite:302][cite:305]

### Creator audience growth
A creator adapts captions, hooks, posts, and replies into multilingual variations without making them sound stiff or machine-translated.

## Company Summary
Mixingo is a specialized translation startup focused on one clear job: making multilingual, code-mixed, informal language easier to understand and use across pasted text, complete files, and API-powered experiences. Its private-beta web product and full-access API support PDF, TXT, DOCX, and ebook translation with layout-aware output alongside direct text translation. Its audience spans anonymous web users, students, creators, developers, startups, and small businesses. The core idea remains the same in every case: real people do not write in perfect monolingual textbook language, and Mixingo is built for that reality.[cite:298][cite:301][cite:306]

The company should present itself as practical, modern, and highly specific. The strength of the business is not breadth; it is precision, accessibility, and product focus around a real communication problem that broad translation tools do not center enough.[cite:243][cite:299][cite:304]
