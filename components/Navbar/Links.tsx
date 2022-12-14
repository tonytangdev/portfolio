import React from "react";

type Props = {
  links: { title: string; link: string }[];
};

const Links = ({ links }: Props) => {
  return (
    <>
      {links.map(({ title, link }) => (
        <li key={title}>
          <a href={link} className={`${title === "About" && "active"} mx-1.5 prose`}>
            {title}
          </a>
        </li>
      ))}
    </>
  );
};

export default Links;
