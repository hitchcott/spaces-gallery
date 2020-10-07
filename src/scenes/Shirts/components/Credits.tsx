import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { MusicStoreHook } from "stores/music";
import { EnvironmentStoreHook } from "../../../stores/environment";
import { getOpenIndex } from "../services/musicManager";

const Container = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: white;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.open && "opacity: 0;"}
`;

const Message = styled.h1`
  font-family: "Lato", sans-serif;
  color: black;
  opacity: 0.9;
  text-align: center;
  margin: 0 10%;
`;

const INTRO_MESSAGES = [
  "damn, sick t-shirt 😎",
  "we're glad you're here ❤️",
  "have you ever seen shit like this? 😲",
  "oh hello 🐛",
  "we've been expecting you",
];

type CreditProps = {
  name: string;
  useMusicStore: MusicStoreHook;
  useEnvStore: EnvironmentStoreHook;
};

const Credits = (props: CreditProps) => {
  const { name, useMusicStore, useEnvStore } = props;

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState<string>();
  const [open, setOpen] = useState(false);

  const paused = useEnvStore((st) => st.paused);
  const song = useMusicStore((st) => st.song);
  const eventIndex = useMusicStore((st) => st.eventIndex);
  const audioRef = useMusicStore((st) => st.audioRef);

  useEffect(() => {
    if (
      song &&
      audioRef?.current &&
      audioRef.current.currentTime > 0 &&
      !message
    ) {
      // Shuffle array
      const shuffled = INTRO_MESSAGES.sort(() => 0.5 - Math.random());
      // Get sub-array of first n elements after shuffled
      const selected = shuffled.slice(0, 1);

      const openIndex = getOpenIndex(song);
      const openTime = song.events[openIndex].time;

      const timeLeft = openTime * 1000 - audioRef.current.currentTime;

      setMessage(selected[0]);
      setTimeout(() => setMessage("welcome to your space"), timeLeft / 3);
      setTimeout(() => setMessage(`Spaces x ${name}`), (timeLeft * 2) / 3);
    } else if (!message) {
      const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [paused, message, song, counter, audioRef?.current?.paused]);

  const event = song ? song.events[eventIndex] : undefined;

  useEffect(() => {
    if (event && event.open && event.open !== open) {
      setOpen(event.open);
    }
  }, [eventIndex]);

  return (
    <Container open={open}>
      <Message>{message || ""}</Message>
    </Container>
  );
};

export default Credits;
