import { z } from "zod";
export const contactSchema = z.object({
	name: z.string().min(2, { message: "Enter Your Name " }).max(100),
	email: z.string().email(),
	phoneno: z
		.string()
		.min(10, { message: "Enter a Valid Phone Number" })
		.max(10, { message: "Enter a Valid Phone Number" }),
	message: z
		.string()
		.min(2, { message: "Enter Your Quarries & Thoughts " })
		.max(500, { message: "Enter Your Quarries & Thoughts " }),
});

export type ContactSchematype = z.infer<typeof contactSchema>;
