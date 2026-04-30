# Kids Quiz

A small quiz app for children with player profiles, tag-based filtering, difficulty levels, timed questions, survival mode, and revision mode.

The current content is mostly in French and covers maths, orthographe, history, geography, languages, physics, and astronomy.

## Project Structure

```text
.
├── App.jsx
├── data/
│   ├── questions.js
│   └── tags.js
└── README.md
```

## Data Files

- `data/questions.js` contains all quiz questions and the filtering helper.
- `data/tags.js` contains the available levels, subjects, themes, languages, and tag metadata.

## Notes

Player profiles and scores are stored locally in the browser with `localStorage`, so they are not committed to the repository.
