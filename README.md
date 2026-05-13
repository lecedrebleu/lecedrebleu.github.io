# lecedrebleu.github.io

Static Next.js site for Le Cèdre bleu.

## Development

```sh
npm install
npm run dev
```

## Content

Events live in `content/blog/{slug}/index.md`.

If an event has a poster, put it in `public/events/{slug}/` and reference the
filename in frontmatter:

```yaml
image: affiche.jpg
```

Homepage thumbnails are generated automatically from event posters during
`npm run dev` and `npm run build`.

Static files such as agenda `.ics` files, `robots.txt`, favicon, logos, and
event images live directly in `public/`.

## Build

```sh
npm run build
```

The static export is written to `out/`.
