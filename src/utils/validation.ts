import * as z from "zod"

export const complexitySchema = z.object({
  timeComplexity: z.string().min(2).max(40),
  spaceComplexity: z.string().min(2).max(40)
})

export const githubSettingsSchema = z.object({
  token: z.string().min(10),
  owner: z.string().min(1),
  repo: z.string().min(1),
  branch: z.string().min(1),
  basePath: z.string()
})
