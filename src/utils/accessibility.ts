// This file is for accessibility and color contrast utility functions
// You can expand this file with more checks as needed

export function isContrastSufficient(hex1: string, hex2: string): boolean {
  // Simple contrast check (placeholder, not WCAG-complete)
  function hexToLuminance(hex: string) {
    const rgb = hex.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16) / 255) || [0,0,0];
    const [r, g, b] = rgb.map(c => (c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4)));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  const L1 = hexToLuminance(hex1);
  const L2 = hexToLuminance(hex2);
  const contrast = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  return contrast >= 4.5; // WCAG AA for normal text
}

// Example usage: isContrastSufficient('#ffffff', '#1a1a1a')
