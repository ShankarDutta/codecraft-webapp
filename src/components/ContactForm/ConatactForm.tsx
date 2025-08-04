"use client";
import { Button } from "@/components/shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shadcnui/form";
import { Input } from "@/components/shadcnui/input";
import { Textarea } from "@/components/shadcnui/textarea";
import { useAOS } from "@/hooks/useaos";
import { contactSchema, ContactSchematype } from "@/lib/conatctschema";
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { Loader, Send } from "lucide-react";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";

import { Slide, toast, ToastContainer } from "react-toastify";

const ContactForm = () => {
	const { theme } = useTheme();
	useAOS();

	const rhform = useForm<ContactSchematype>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			phoneno: "",
			message: "",
		},
		mode: "onSubmit",
	});

	const sentData = async (data: ContactSchematype) => {
		try {
			const payload = {
				...data,
				access_key: process.env.NEXT_PUBLIC_WEB3FORM_KEY,
			};

			const res: { success: boolean } = await ky
				.post("https://api.web3forms.com/submit", {
					json: payload,
					headers: {
						Accept: "application/json",
					},
				})
				.json();

			if (res.success) {
				toast.success("Message sent successfully!");
				rhform.reset();
			} else {
				toast.error("Failed to send message.");
			}
		} catch (error) {
			toast.error("Something went wrong!");
			console.error("Form submission error:", error);
		}
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={theme === "dark" ? "dark" : "light"}
				transition={Slide}
			/>
			<Form {...rhform}>
				<form
					onSubmit={rhform.handleSubmit(sentData)}
					className="grid gap-4"
					data-aos="fade-left">
					{/* input 01 */}
					<FormField
						control={rhform.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Name"
										autoComplete="off"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* input 02 */}
					<FormField
						control={rhform.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Id</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Email"
										autoComplete="off"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* input 03 */}
					<FormField
						control={rhform.control}
						name="phoneno"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Phone Number"
										autoComplete="off"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* input 04 */}
					<FormField
						control={rhform.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										placeholder="Message"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* submit button */}
					<Button
						className="text-md w-[150px] bg-blue-500 font-normal text-white hover:cursor-pointer hover:bg-blue-600 dark:bg-violet-500 dark:hover:bg-violet-700"
						disabled={rhform.formState.isSubmitting}>
						{rhform.formState.isSubmitting ? (
							<>
								<Loader className="mr-2 animate-spin" />
								Sending...
							</>
						) : (
							<>
								<Send className="mr-2" />
								Send Message
							</>
						)}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default ContactForm;
