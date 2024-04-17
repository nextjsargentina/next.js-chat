# NextJS-Chat 💬

## Overview

NextJS-Chat, developed by [Next.js Argentina](https://github.com/nextjsargentina), is designed to facilitate interaction with the `nextjs-docs` repository. Utilizing a dataset from the app-router version of Next.js 14, it integrates a chat interface from [chatbotui.com](https://www.chatbotui.com/). This setup, combined with llama-index, OpenAI, and ChatGPT technologies, allows users to freely interact with a virtual expert on frontend development, React, and best practices in Next.js. Targeting new developers with no previous experience or knowledge, NextJS-Chat aims to educate on Next.js and the principles of clean code and design patterns.

## Features

- **Interactive Chatbot**: A platform to consult with a virtual expert on frontend, React, and Next.js.
- **Educational Resource**: A means to learn about clean code practices and design patterns in Next.js.
- **Beginner-Friendly**: Specifically designed for newcomers to the development scene.

## Goal

To introduce new developers to Next.js and guide them towards adopting best coding practices through an engaging, user-friendly interface.

## Getting Started

To get started with NextJS-Chat, follow the steps below:

### 1. Clone the repository

```bash
git clone git@github.com:nextjsargentina/next.js-chat.git
```

### 2. Navigate to the project directory

```bash
cd next.js-chat
```

### 2. Install the dependencies

```bash
pnpm install
```

### 3. Setting up the environment variables

To set up the secrets, follow the steps below:

1. Create a `.env.local` file in the root directory of the project.

2. Add the following environment variables to the `.env.local` file:

```bash
# The name of LLM model to use.
MODEL=<model-name>

# The OpenAI API key to use.
OPENAI_API_KEY=<api-key>

# The Llama Cloud API key.
# LLAMA_CLOUD_API_KEY=

# The LLM model to use (hardcode to front-end artifact).
NEXT_PUBLIC_MODEL=<model-name>
```

### 4. Start the development server

```bash
pnpm dev
```

## How to Contribute

Contributions are welcome! If you're interested in fixing bugs, adding features, or improving documentation, please join us in enhancing the NextJS-Chat experience for everyone.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Follow Us

Stay updated with the latest on NextJS-Chat by following [Next.js Argentina on GitHub](https://github.com/nextjsargentina).
