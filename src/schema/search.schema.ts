import { z } from "zod";

const OptionTypeSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const searchSchema = z.object({
  search: z.array(OptionTypeSchema).nonempty("Selecione ao menos uma opção."),
});
