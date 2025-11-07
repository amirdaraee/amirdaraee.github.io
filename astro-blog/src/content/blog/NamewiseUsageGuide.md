---
title: 'How to Use Namewise to Organize Your Files with AI'
description: 'A practical guide to using namewise, an AI-powered CLI tool that automatically renames files based on their content'
published: true
date: 2025-11-07T10:00:00.000Z
author: amirdaraee
slug: 'namewise_usage_guide'
photo: stock/file-organization.png
imgCredit: unsplash.com
keywords:
  - AI
  - CLI
  - File Management
  - Node.js
  - TypeScript
language: en
output:
  html_document: { css: post-details.component.css }
slugs:
  - namewise_usage_guide
---

# How to Use Namewise to Organize Your Files with AI

If you've ever found yourself staring at a folder full of files with names like `document1.pdf`, `IMG_20240315.jpg`, or `Report FINAL FINAL v3.docx`, you know how frustrating file organization can be. I built namewise to solve this problem using AI to automatically rename files based on their actual content.

## What is Namewise?

Namewise is a command-line tool that reads your files, understands what's inside them, and suggests better names. Instead of manually opening each file to figure out what it contains, you can let AI do the heavy lifting. The tool supports both cloud AI providers like Claude and OpenAI, as well as local models through Ollama and LMStudio if you prefer keeping your data private.

## Getting Started

First, you need to install the tool. Clone the repository and build it:

```bash
git clone https://github.com/amirdaraee/namewise.git
cd namewise
npm install
npm run build
```

If you want to use it from anywhere on your system, you can link it globally:

```bash
npm link
```

## Basic Usage

The simplest way to use namewise is with the dry run mode, which shows you what changes would be made without actually renaming anything:

```bash
namewise rename ./my-documents --dry-run
```

This command scans all supported files in the `my-documents` folder and shows you what the new names would look like. It's always a good idea to run with `--dry-run` first to make sure you're happy with the results.

## Choosing an AI Provider

You have several options for the AI provider. If you care about privacy and don't want your files sent to external servers, use a local provider:

**Using Ollama (my recommended local option):**

```bash
ollama serve
ollama pull llama3.1
namewise rename ./documents --provider ollama --dry-run
```

Ollama is free, runs entirely on your machine, and works surprisingly well for this task.

**Using Claude (for best accuracy):**

```bash
export CLAUDE_API_KEY=your-key-here
namewise rename ./documents --provider claude --dry-run
```

Claude tends to produce the most accurate and descriptive filenames, but you'll need an API key and your files will be sent to Anthropic's servers for processing.

## Customizing the Output

One of the features I'm most happy with is the template system. Different types of files need different naming patterns. Here's how to use them:

**For personal documents like IDs or contracts:**

```bash
namewise rename ./documents --template document --name "john" --date "YYYYMMDD"
```

This might rename `scan001.pdf` to something like `driving-license-john-20250905.pdf`.

**For movies:**

```bash
namewise rename ./movies --template auto
```

The auto template detects what kind of file it is. For movies, it will try to extract the title and year, giving you names like `the-dark-knight-2008.mkv`.

**For TV shows:**

```bash
namewise rename ./shows --template auto
```

This works great for episode files, producing names like `breaking-bad-s01e01.mkv` when it detects season and episode information.

## Naming Conventions

By default, namewise uses kebab-case (words separated by hyphens), but you can change this:

```bash
namewise rename ./files --case snake_case
```

This gives you names like `project_requirements_document.pdf` instead of `project-requirements-document.pdf`. Other options include camelCase, PascalCase, lowercase, and UPPERCASE.

## Real World Example

Let me show you a practical scenario. Say you have a folder with these files:

```
document1.pdf
IMG_20240315_143022.pdf
Report Q4 2023 FINAL FINAL.xlsx
```

After running:

```bash
namewise rename ./documents --provider claude --dry-run
```

You might get:

```
quarterly-financial-report-q4-2023.pdf
project-requirements-specification.pdf
annual-sales-performance-summary.xlsx
```

Much better, right?

## Safety Features

I built in several safety features because accidentally destroying your file organization is not fun:

1. **Dry run mode** lets you preview everything first
2. **Conflict detection** prevents overwriting existing files
3. **File size limits** stop you from processing huge files that would cost a fortune in API calls
4. **Extension preservation** keeps your file types intact

## Tips for Best Results

After using namewise on thousands of files, here are my recommendations:

**Start with dry run.** Always. I can't stress this enough. Preview the changes first.

**Use local models for sensitive files.** If you're renaming tax documents or confidential work files, stick with Ollama or LMStudio. Your data never leaves your computer.

**Choose the right template.** The auto template is smart, but if you know what kind of files you're processing, being explicit with `--template document` or `--template movie` usually gives better results.

**Set reasonable size limits.** The default is 10MB, which works well for most documents. If you're processing larger files, increase it with `--max-size 20`, but be aware this might cost more with cloud providers.

## Troubleshooting

**PDF parsing fails:** Some PDFs are just images of pages (scanned documents). There's not much text to extract. In those cases, the AI won't have much to work with.

**API errors:** If you're using Claude or OpenAI, double-check your API key is correct and you have credits available.

**Ollama connection errors:** Make sure `ollama serve` is actually running in another terminal window.

## Supported File Types

Right now, namewise works with:

- PDF documents
- Microsoft Word (.docx, .doc)
- Microsoft Excel (.xlsx, .xls)
- Text files (.txt, .md, .rtf)

I'm planning to add support for more file types based on user feedback.

## Final Thoughts

I built namewise because I was tired of manually renaming files after scanning documents or downloading things from various sources. It's saved me hours of tedious work, and I hope it helps you too.

The source code is available on [GitHub](https://github.com/amirdaraee/namewise), and contributions are welcome. If you run into issues or have ideas for improvements, feel free to open an issue.

Start with a small batch of files, use dry run mode, and see how it works for you. Once you get comfortable with it, you can start processing larger folders and really streamline your file organization workflow.
