import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
    label: string;
    icon: IconType;
    href: string;

}
export const PortalMenuList = ({
    label,
    icon: Icon,
    href

}: Props) => {
    return (
        <Link href={href} className="flex flex-col items-center justify-center gap-1 text-neutral-400 min-w-full ">
            <Icon className="text-neutral-400 2xl:size-10 xl:size-8 md:size-9 size-8 hover:text-neutral-300" />
            <span className="text-white text-wrap w-6/12 text-base md:text-sm text-center">{label}</span>
        </Link>
    );
}