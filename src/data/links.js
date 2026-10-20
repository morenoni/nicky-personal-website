// The links shown at the bottom of a card. Each one is { href, label }, and the labels live here
// once so every card says exactly the same thing. Cards list them in the order they should appear.

export const codeLink = href => ({ href, label: 'View the code' });
export const paperLink = href => ({ href, label: 'Read the paper' });
export const posterLink = href => ({ href, label: 'See the Poster' });
