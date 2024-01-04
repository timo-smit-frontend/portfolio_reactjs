import React, { useEffect, useState } from "react";

const characterTraits = [
  "creative",
  "proactive",
  "cool",
  "motivated",
  "social",
  "enthusiastic",
  "happy",
  "nerdy",
  "respectable",
  "weird",
  "funny",
  "adventurous",
  "surprising",
  "badass",
  "fashionable",
  "inventive",
  "playful",
  "daring",
  "charismatic",
  "eccentric",
  "optimistic",
  "lively",
  "spirited",
  "humorous",
  "imaginative",
  "bold",
  "artistic",
  "dreamy",
  "intuitive",
  "spontaneous",
  "compassionate",
  "kind-hearted",
  "energetic",
  "dynamic",
  "sympathetic",
];

export default function TraitSwapper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTrait, setCurrentTrait] = useState(characterTraits[0]);

  useEffect(() => {
    // Update current trait and reset character index
    const updateTrait = () => {
      const nextIndex =
        currentIndex === characterTraits.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentTrait(characterTraits[nextIndex]);
      setCharIndex(0);
    };

    // Typing effect for characters
    if (charIndex < currentTrait.length) {
      const timeoutId = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 100); // speed of typing each character
      return () => clearTimeout(timeoutId);
    } else {
      const intervalId = setInterval(updateTrait, 2000); // delay before switching to next word
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, charIndex, currentTrait]);

  return <span id="trait-styling">{currentTrait.substring(0, charIndex)}</span>;
}
