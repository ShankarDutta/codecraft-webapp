"use client";
import { ContactSchematype, contactSchema } from "@/lib/conatctschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Send } from "lucide-react";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { Slide, ToastContainer, toast } from "react-toastify";
import { Button } from "@/components/shadcnui/button";
import ky from "ky";
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
const ContactForm = () => {
	const { theme } = useTheme();
	const rhform = useForm<ContactSchematype>({
		// use resolver
		resolver: zodResolver(contactSchema),

		// default values for the form
		defaultValues: {
			name: "",
			email: "",
			phoneno: "",
			message: "",
		},

		// mode of validation
		mode: "onSubmit",
	});

	const sentData = async (data: ContactSchematype) => {
		console.log(data);

		try {
			const payload = {
				...data,
				access_key: "YOUR_ACCESS_KEY_HERE",
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
			<Form {...rhform}>
				<form
					action=""
					onSubmit={rhform.handleSubmit(sentData)}
					className="grid gap-4">
					{/* input 01  */}
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
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* input 02  */}
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
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* input 03  */}
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
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* input 04  */}
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
						className="text-md w-[150] bg-blue-500 font-normal text-white hover:cursor-pointer hover:bg-blue-600 dark:bg-violet-500 dark:hover:bg-violet-700"
						disabled={rhform.formState.isSubmitting}>
						{rhform.formState.isSubmitting ? (
							<>
								<Loader className="animate-spin" /> Sent Message
							</>
						) : (
							<>
								<Send /> Send Message
							</>
						)}
					</Button>
				</form>
				<ToastContainer
					position="top-right"
					autoClose={4000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					pauseOnFocusLoss={false}
					draggable
					theme={theme === "dark" ? "dark" : "light"}
					transition={Slide}
				/>
			</Form>
		</>
	);
};

export default ContactForm;
