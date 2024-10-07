// src/utils/sanitizeLatex.js

export function sanitizeLatex(text) {
    if (!text) return '';
  
    let sanitized = text;
  
    // Replace escaped characters
    const replacements = {
      '\&': '&',
      '\\%': '%',
      '\\#': '#',
      '\\$': '$',
      '\\_': '_',
      '\\{': '{',
      '\\}': '}',
      '\\~{}': ' ',
      '\\^{}': '^',
      '\\textbf{': '',
      '\\textit{': '',
      '\\texttt{': '',
      '}': '',
      '{': '',
      '\\ ': ' ', // Handles escaped spaces
    };
  
    Object.keys(replacements).forEach((key) => {
      const regex = new RegExp(key, 'g');
      sanitized = sanitized.replace(regex, replacements[key]);
    });
  
    // Handle accented characters (basic implementation)
    const accentedReplacements = {
      "\\'{a}": 'á',
      "\\`{a}": 'à',
      "\\~{a}": 'ã',
      "\\^{a}": 'â',
      '\\.{a}': 'a',
      "\\'e": 'é',
      "\\`e": 'è',
      "\\~e": 'ẽ',
      "\\^e": 'ê',
      '\\.e': 'e',
      // Add more as needed
    };
  
    Object.keys(accentedReplacements).forEach((key) => {
      const regex = new RegExp(key, 'g');
      sanitized = sanitized.replace(regex, accentedReplacements[key]);
    });
  
    // Remove remaining LaTeX commands
    sanitized = sanitized.replace(/\\[a-zA-Z]+\{([^}]+)\}/g, '$1'); // e.g., \emph{word} -> word
  
    return sanitized;
  }
  