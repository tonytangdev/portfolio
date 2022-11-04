import React from "react";
import { TypingText } from "../components/TypingText";

type Props = {};

const Page = (props: Props) => {
  const types = ["Hi ! I'm ", "a web developer", "a Lead developer", "Tony :)"];
  return (
    <div
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 prose text-5xl font-bold">
            <TypingText types={types} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
