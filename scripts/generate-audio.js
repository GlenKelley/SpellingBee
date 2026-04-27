#!/usr/bin/env node
// Generate pre-recorded audio files via the ElevenLabs API.
//
// Usage:
//   node scripts/generate-audio.js "Please spell,"
//   echo "antler" | node scripts/generate-audio.js
//   cat wordlist.txt | node scripts/generate-audio.js
//
// Environment variables:
//   ELEVENLABS_API_KEY   (required) Your ElevenLabs API key
//   ELEVENLABS_VOICE_ID  (optional) Voice ID to use — defaults to Sarah
//
// Each line of input becomes one MP3 saved to public/audio/<slug>.mp3.
// The matching audioLibrary.js config line is printed after each file.

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR   = join(__dirname, '..', 'public', 'audio')

const API_KEY  = process.env.ELEVENLABS_API_KEY
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? 'EXAVITQu4vr4xnSDxMaL' // Sarah
// const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? 'r3SDVYUIvcC4EweQtSj0' // Erika
const MODEL_ID = 'eleven_multilingual_v2'

if (!API_KEY) {
  console.error('Error: ELEVENLABS_API_KEY environment variable is not set.')
  process.exit(1)
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')   // strip punctuation
    .trim()
    .replace(/\s+/g, '-')          // spaces → hyphens
    .replace(/-+/g, '-')           // collapse multiple hyphens
}

async function readStdin() {
  if (process.stdin.isTTY) return []
  let raw = ''
  process.stdin.setEncoding('utf8')
  for await (const chunk of process.stdin) raw += chunk
  return raw.split('\n').map(l => l.trim()).filter(Boolean)
}

async function generateOne(text) {
  const slug     = slugify(text)
  const filename = `${slug}.mp3`
  const outPath  = join(OUT_DIR, filename)

  process.stdout.write(`Generating "${text}" … `)

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: 'POST',
      headers: {
        'xi-api-key':   API_KEY,
        'Content-Type': 'application/json',
        'Accept':       'audio/mpeg',
      },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: {
          stability:        0.5,
          similarity_boost: 0.75,
        },
      }),
    }
  )

  if (!response.ok) {
    const body = await response.text()
    console.error(`FAILED (${response.status}): ${body}`)
    return
  }

  const buffer = await response.arrayBuffer()
  mkdirSync(OUT_DIR, { recursive: true })
  writeFileSync(outPath, Buffer.from(buffer))

  console.log(`saved → public/audio/${filename}`)
  console.log(`  config: '${text}': '/audio/${filename}',`)
}

// ── Entry point ──

const lines = process.argv[2]
  ? [process.argv[2]]   // single text from CLI argument
  : await readStdin()   // one file per line from stdin

if (lines.length === 0) {
  console.error('Error: provide text as a CLI argument or pipe lines via stdin.')
  process.exit(1)
}

for (const line of lines) {
  await generateOne(line)
}
