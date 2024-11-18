import Link from "next/link";
import { Button } from "../ui/button";
import { VscCoffee } from "react-icons/vsc";

function Logo() {
	return (
		<Button
			size='icon'
			asChild>
			<Link href={"/"}>
				<VscCoffee className='w-6 h-6' />
			</Link>
		</Button>
	);
}
export default Logo;
