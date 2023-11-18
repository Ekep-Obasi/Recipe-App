enum GlassSize {
  SMALL = "small",
  MEDIUM = "meduim",
  LARGE = "large",
}

export type Glass = {
  id: number;
  size: GlassSize;
  description: string;
};
