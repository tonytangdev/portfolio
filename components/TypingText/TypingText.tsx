"use client";

import React from "react";

import Typed from "typing-ind";

type Props = {
    types: string[]
};

const TypingText = ({types}: Props) => {
  return (
    // @ts-ignore
    <Typed
      type={types} // if no backspace animation just write 1 string only (no need to use array)
      backspace={[1, 2]} // contains the index value of the type property, if only 1 index no need to use array (will execute from the smallest index)
      delay={1000} // delay backspace animation (in milliseconds)
      duration={50} // duration of typing animation per character (in milliseconds). Default 100
      cursor={"blinking-text-cursor"} // style for blinking text cursor animation. can be filled directly with css properties or class names in your css file
    />
  );
};

export default TypingText;
