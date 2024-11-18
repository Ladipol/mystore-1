"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

function SignOutLink() {
	const { toast } = useToast();
	const handleLogout = () => {
		toast({ description: "Logged out successfully" });
	};
	return (
		<SignOutButton>
			<Link
				href={"/"}
				onClick={handleLogout}
				className='w-full text-left'>
				Logout
			</Link>
		</SignOutButton>
	);
}
export default SignOutLink;
