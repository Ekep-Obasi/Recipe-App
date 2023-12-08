enum GlassSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type Glass = {
  id: number
  size: GlassSize
  description: string
}
