import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle, BiCartAlt } from "react-icons/bi";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/category">CAT</NavLink>
					</li>
					<li>
						<NavLink to="/category">CAT</NavLink>
					</li>
					<li>
						<NavLink to="/category">CAT</NavLink>
					</li>
					<li>
						<NavLink to="/category">CAT</NavLink>
					</li>
				</ul>
				<div className="logo-wrapper">
					<Link exact to="/">
						<h1>Logo</h1>
					</Link>
				</div>
				<ul>
					<li>
						<NavLink to="/about">About Us</NavLink>
					</li>
					<li>
						<NavLink to="/faq">FAQ</NavLink>
					</li>
					<li>
						<NavLink to="/login">
							<BiUserCircle className="icon" />
						</NavLink>
					</li>
					<li>
						<NavLink className="item-added" to="/cart">
							<BiCartAlt className="icon" />
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
