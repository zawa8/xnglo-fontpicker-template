# xnglo-fontpicker-template

Reusable Next.js font picker for xnglo xi38 fonts.

## Features

- Dropdown font picker for 11 xnglo fonts
- Global font switching via CSS variables
- Persists selection with localStorage
- TypeScript + Next.js 14

## Usage

### 1. Copy the folders into your project

    components/hsciifp/
    app/layout.tsx (or merge into your existing layout)

### 2. Install dependencies

    pnpm install   # or npm install

### 3. Run dev server

    pnpm dev

Open http://localhost:3000

## Fonts Included

- hindixv38
- bengalixb38
- eNgliSxe38
- guzrajixg38
- jeluguxj38
- knRaxk38
- mlyalxmxm38
- oriyaxo38
- pnzabixp38
- sinhlaxs38
- tmilxt38

## Files

    components/hsciifp/
    ├── LocalFontPicker.tsx   # Font dropdown component
    ├── varfonts.ts            # Font definitions
    └── fonts/hscii/xi38font/  # TTF/WOFF2 font files

## License

MIT