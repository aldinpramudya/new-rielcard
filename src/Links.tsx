import { socialLinks } from "../constants";

export default function Links() {
    return (
        <div className="flex flex-col gap-4">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#FF6A00] transition-all duration-300"
                >
                    <span className="2xl:text-2xl text-xl">{social.icon}</span>
                    <span className="2xl:text-2xl font-semibold">{social.name}</span>
                </a>
            ))}
        </div>
    )
}