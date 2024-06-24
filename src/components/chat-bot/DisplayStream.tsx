/**
 * Renders a stream of text that gradually appears word by word.
 * Uses Markdown to render the text.
 *
 * @component
 * @param {Props} props - The component props.
 * @param {string | undefined} props.paragraph - The paragraph to be displayed.
 * @returns {TSX.Element} The rendered component.
 */
import React, { useState, useEffect, RefObject } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  paragraph: string | undefined;
  containerRef: RefObject<HTMLDivElement>;
  hasUserScrolled: boolean;
}

const DisplayStream = ({ paragraph, containerRef, hasUserScrolled }: Props) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  /**
   * Scrolls the chat container to the bottom.
   */
  useEffect(() => {
    const scrollToBottom = () => {
      const container = containerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    };
    if (!hasUserScrolled) {
      scrollToBottom();
    }
  }, [displayedText, containerRef, hasUserScrolled]);

  // This code generates a manual streaming response by splitting the response in an array.
  // Until we find an optimal method, we are disabling streaming in the chatbot.
  
  /**
   * Displays the text in the paragraph with a typewriter effect.
   * @param {string} paragraph - The text to be displayed.
   */
  // useEffect(() => {
  //   const words = (paragraph ?? "").split(" ");
  //   let index = 0;

  //   const intervalId = setInterval(() => {
  //     if (index < words.length) {
  //       const nextWord = words[index];
  //       if (nextWord !== undefined) {
  //         // Checking if nextWord is not undefined to solve words missing bug in UI
  //         setDisplayedText((prevText) => {
  //           const newText = prevText + " " + nextWord;
  //           // console.log(newText);
  //           return newText;
  //         });
  //       }
  //       index += 1;
  //     } else {
  //       clearInterval(intervalId);
  //     }
  //   }, 50);

  //   return () => clearInterval(intervalId);
  // }, [paragraph]);

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className="markdown prose dark:prose-invert w-full min-w-full text-base"
    >
      {paragraph}
    </Markdown>
  );
};

export default DisplayStream;
