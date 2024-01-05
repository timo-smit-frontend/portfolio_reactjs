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
const TraitSwapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTrait, setCurrentTrait] = useState(characterTraits[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [randomTrait, setRandomTrait] = useState("");

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 800);
    }

    handleResize(); // Set initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
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
      }, 200); // speed of typing each character
      return () => clearTimeout(timeoutId);
    } else {
      const intervalId = setInterval(updateTrait, 3000); // delay before switching to next word
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, charIndex, currentTrait]);

  useEffect(() => {
    if (isSmallScreen) {
      const randomIndex = Math.floor(Math.random() * characterTraits.length);
      setRandomTrait(characterTraits[randomIndex]);
    }
  }, [isSmallScreen]);

  const traitToDisplay = isSmallScreen
    ? randomTrait || "" // Display an empty string if randomTrait is not set
    : currentTrait.substring(0, charIndex);

  const displayedTrait = isSmallScreen
    ? traitToDisplay
    : traitToDisplay + (charIndex < currentTrait.length ? "_" : "");

  return <span id="trait-styling">{displayedTrait}</span>;
};

export default TraitSwapper;
