import { AiFillHome, AiFillIdcard, AiFillMail, AiOutlineShareAlt } from "react-icons/ai"
import { FaDiscord, } from "react-icons/fa";

/* You can go to http://react-icons.github.io/react-icons for explore and add icons. */

export default {

    links: [
        {label: "Home", to: "/", icon: (<AiFillHome size="23px"/>)},
        {label: "About", to: "/about", icon: (<AiFillIdcard size="23px"/>)},
        {label: "Get Contact", to: "/contact", icon: (<AiFillMail size="23px"/>)},
        {label: "Projects", to: "/projects", icon: (<AiOutlineShareAlt size="23px"/>)},
        {label: "Discord", to: "https://discord.com", icon: (<FaDiscord size="23px"/>)}

    ]

}
