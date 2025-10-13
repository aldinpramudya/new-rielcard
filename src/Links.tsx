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
                    className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-all duration-300"
                >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-2xl font-semibold">{social.name}</span>
                </a>
            ))}
        </div>
    )
}