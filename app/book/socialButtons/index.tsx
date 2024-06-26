import React from "react";
import { IconBrandGmail, IconBrandInstagram, IconPhone } from "@tabler/icons-react";
import { BottomGradient } from "@/components/ui/bottomGradient";

const socialMediaButtons = [
    { icon: IconBrandInstagram, label: "Instagram" },
    { icon: IconPhone, label: "Call me" },
    { icon: IconBrandGmail, label: "Email" },
];

const SocialButtons = () => (
    <div className="flex flex-col space-y-4">
        {socialMediaButtons.map((button, index) => (
            <button
                key={index}
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
            >
                <button.icon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {button.label}
                </span>
                <BottomGradient />
            </button>
        ))}
    </div>
);

export default SocialButtons;
