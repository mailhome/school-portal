import { FaUser, FaUserGraduate, FaMoneyCheckAlt, FaRegEnvelope } from "react-icons/fa";
import { FaFileCircleCheck, FaCalendarCheck } from "react-icons/fa6";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GrPersonalComputer } from "react-icons/gr";
import { ImLibrary } from "react-icons/im";
import React from 'react'
import { PortalMenuList } from "./portalMenuList";


const portalMenu = [
    {
        label: "Staff Login",
        icon: FaUser,
        href: "/staff-login"
    },

    {
        label: "Student Login",
        icon: FaUserGraduate,
        href: "/student-login"
    },
    {
        label: "Pay Fees",
        icon: FaMoneyCheckAlt,
        href: "/payment"
    },
    {
        label: "Termly/Mock Results",
        icon: FaFileCircleCheck,
        href: "/termly-result"
    },


    {
        label: "Admission-results",
        icon: FaCalendarCheck,
        href: "/admissions-result"
    },
    {
        label: "CBT Exams",
        icon: GrPersonalComputer,
        href: "/cbt-exams"
    },

    {
        label: "Admission apply",
        icon: HiOutlineBuildingLibrary,
        href: "/admission-application"
    },
    {
        label: "e-Library",
        icon: ImLibrary,
        href: "/e-library"
    },
    {
        label: "Message enquiry",
        icon: FaRegEnvelope,
        href: "/messgae-enquiry"
    },
]

export default function PortalMenu() {
    return (
        <div className='h-auto rounded-md my-4 2xl:py-20 py-10 md:py-14 shadow-2xl 2xl:w-4/12 lg:w-6/12 md:w-7/12 w-9/12 mx-auto  bg-neutral-500 dark:bg-neutral-200'>
            <div className="grid grid-cols-3 items-center justify-center 2xl:gap-10 gap-8 w-full">
                {portalMenu.map(({ label, icon, href }) => (
                    <PortalMenuList
                        key={href}
                        label={label}
                        icon={icon}
                        href={href}
                    />
                ))}
            </div>
        </div>
    )
}
