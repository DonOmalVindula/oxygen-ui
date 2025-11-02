# WSO2 Oxygen-UI

**WSO2 Oxygen-UI** is the official design system and React component library for WSO2 products, built on top of [Material-UI v7](https://mui.com/material-ui/). It provides a consistent, modern, and accessible user experience across all WSO2 applications, enabling rapid development and seamless integration with the latest frontend technologies.

Oxygen-UI delivers:

- A comprehensive set of ready-to-use UI components, themed for WSO2 brand and product needs
- Full compatibility with Material-UI 7 and its ecosystem
- Support for custom WSO2 components and design patterns
- Easy integration with Vite, Nx, and modern React workflows

# Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v25 or newer recommended)
- [pnpm](https://pnpm.io/) (v10 or newer recommended)
- [Vite](https://vitejs.dev/) (for frontend projects)
- [Nx](https://nx.dev/) (optional, for monorepo/workspace management)

# Usage Example

Simply import any Material-UI or Oxygen-UI custom component like:

```js
import Button from '@wso2/oxygen-ui/Button'
```

Refer to [Material-UI documentation](https://mui.com/material-ui/all-components/) for component usage details.

# Oxygen UI Vite Integration

## Setup

Install dependencies:

```sh
pnpm add -D @wso2/oxygen-ui @wso2/vite-plugin-oxygen-ui @mui/material @emotion/styled @emotion/react
```

## Vite Project Configuration

### tsconfig.json

Add the following to your `tsconfig.json`:

```json
"paths": {
  "@wso2/oxygen-ui/*": ["./node_modules/@mui/material/*"]
}
```

### vite.config.ts

Add the plugin to your Vite config:

```ts
import oxygenUIPlugin from '@wso2/vite-plugin-oxygen-ui';

export default defineConfig({
  plugins: [
    oxygenUIPlugin()
  ],
})
```

# Build Instructions

To build the project and all packages:

```sh
pnpm build
```

To run the sample app:

```sh
cd samples/oxygen-ui-test-app
pnpm dev
```

# Project Structure

The workspace is organized as follows:

```
oxygen-ui/
├── packages/
│   ├── oxygen-ui/                # Main Oxygen-UI component library
│   ├── vite-plugin-oxygen-ui/    # Vite plugin for Oxygen-UI aliasing
│   └── ...
├── samples/
│   └── oxygen-ui-test-app/       # Example Vite + React app using Oxygen-UI
├── node_modules/
├── README.md
├── package.json
└── ...
```

## License

Licenses this source under the Apache License, Version 2.0 ([LICENSE](LICENSE)), You may not use this file except in compliance with the License.

---

(c) Copyright 2025 WSO2 LLC.
