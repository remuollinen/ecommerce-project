import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle, BiCartAlt } from "react-icons/bi";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/shop/category1">CAT</NavLink>
					</li>
					<li>
						<NavLink to="/shop/category2">CAT</NavLink>
					</li>
					<li>
						<NavLink to="/shop/category3">CAT</NavLink>
					</li>
					<li>
						<NavLink to="/shop/category4">CAT</NavLink>
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
						<NavLink to="/cart">
							<BiCartAlt className="icon" />
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
