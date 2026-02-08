export type ThemeVars = {
  bg: string
  fg: string
  surface: string
  border: string
  muted: string
  accent: string
  accentHover: string
  highlight: string
}

export type ThemePresetKey = keyof typeof themePresets

export const themePresets = {
  sandGreen: {
    bg: '#F4EBDD',
    fg: '#1F3A2E',
    surface: '#FFF8EE',
    border: '#E3D6C3',
    muted: '#4E6B5B',
    accent: '#2F6B4F',
    accentHover: '#255740',
    highlight: '#C97C4A',
  },
  inkSand: {
    bg: '#F3EEE4',
    fg: '#1A1E22',
    surface: '#FFFFFF',
    border: '#DED6C9',
    muted: '#4B5563',
    accent: '#0F4C5C',
    accentHover: '#0B3A46',
    highlight: '#9A6B2F',
  },
} satisfies Record<string, ThemeVars>

export function getThemePreset(key: unknown): ThemeVars {
  if (typeof key === 'string' && key in themePresets) {
    return themePresets[key as ThemePresetKey]
  }
  return themePresets.sandGreen
}

