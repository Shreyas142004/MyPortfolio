import React from 'react';

export function GithubIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetcodeIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 .584.951l.013.015.002.003.011.011 3.518 3.568a4.982 4.982 0 0 0 3.69 1.543 4.938 4.938 0 0 0 3.655-1.543l2.812-2.835a1.272 1.272 0 0 0-.012-1.79 1.25 1.25 0 0 0-1.776-.013l-2.812 2.836a2.464 2.464 0 0 1-1.879.778 2.482 2.482 0 0 1-1.876-.778l-3.487-3.533a3.52 3.52 0 0 1-.72-1.077 3.553 3.553 0 0 1-.251-1.194 3.52 3.52 0 0 1 .716-2.222l3.854-4.126 4.97-5.321c.523-.561.493-1.437-.068-1.96a1.36 1.36 0 0 0-.974-.32zM16.5 10.5a1.25 1.25 0 0 0-1.25 1.25v.5h-7.5a1.25 1.25 0 0 0 0 2.5h7.5v.5a1.25 1.25 0 0 0 2.5 0v-3.5a1.25 1.25 0 0 0-1.25-1.25z" />
    </svg>
  );
}
