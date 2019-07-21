import React from "react";
import "./sidebar.css";
import slug from "slug";
import { Link } from "gatsby";

export default () => {
    return (
        <nav class="nav">
            <ul>
                <li class="active"><a href="#">Welcome</a></li>
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">What We Do</a></li>
                <li><a href="#">Get In Touch</a></li>
            </ul>
        </nav>
    )
}