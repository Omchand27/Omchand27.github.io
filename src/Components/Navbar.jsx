import { Text } from "@chakra-ui/react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header style={{position:"sticky", top:"0px", zIndex:"5"}}>
			<h3></h3>
			<nav ref={navRef}>
				<a href="#Home"><Text fontSize="2xl">Home</Text></a>
				<a href="#about"><Text fontSize="2xl">About Me</Text></a>
				<a href="#skills"><Text fontSize="2xl">Skills</Text></a>
				<a href="#projects"><Text fontSize="2xl">Projects</Text></a>
				<a href="#contact"><Text fontSize="2xl">Contact</Text></a>
				<a target="_blank" href="https://drive.google.com/drive/u/2/my-drive"><Text fontSize="2xl">Resume</Text></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

// m="auto"
//                     fontWeight="bold"
//                     fontSize="20px"
//                     p="0.5%"
//                     pl="3%"
//                     pr="3%"
//                     borderRadius="7px"
//                     _hover={{
//                       bg: "green",
//                       color: "white",
//                       boxShadow: "green 0px 5px 5px",
//                       cursor: "pointer",
//                     }}
