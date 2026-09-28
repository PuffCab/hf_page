"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";
import { waveformBars, type VoiceSample } from "@/data/voice";
import { cn } from "@/lib/utils";

/** Broadcast so that starting one sample pauses whichever other one is playing. */
const PLAY_EVENT = "voice-sample-play";

function formatTime(seconds: number) {
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}

type WaveformPlayerProps = {
  sample: VoiceSample;
};

export function WaveformPlayer({ sample }: WaveformPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const onOtherPlay = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== sample.slug) {
        audioRef.current?.pause();
      }
    };
    window.addEventListener(PLAY_EVENT, onOtherPlay);
    return () => window.removeEventListener(PLAY_EVENT, onOtherPlay);
  }, [sample.slug]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: sample.slug }));
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const available = Boolean(sample.audio);
  const playedBars = Math.round(progress * waveformBars.length);

  return (
    <div className="flex h-[72px] items-center gap-4 rounded-2xl border border-border bg-muted px-4">
      {available && (
        <audio
          ref={audioRef}
          src={sample.audio}
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false);
            setProgress(0);
            setCurrentTime(0);
          }}
          onTimeUpdate={(event) => {
            const { currentTime: time, duration } = event.currentTarget;
            setCurrentTime(time);
            setProgress(duration ? time / duration : 0);
          }}
        />
      )}

      <button
        type="button"
        onClick={toggle}
        disabled={!available}
        aria-label={
          available
            ? `${playing ? "Pause" : "Play"} ${sample.title}`
            : `${sample.title} sample coming soon`
        }
        title={available ? undefined : "Sample coming soon"}
        className="flex size-8 shrink-0 items-center justify-center text-foreground transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {playing ? (
          <PauseIcon className="size-5" />
        ) : (
          <PlayIcon className="size-5 translate-x-px" />
        )}
      </button>

      <div
        aria-hidden="true"
        className="flex h-[18px] min-w-0 flex-1 items-center justify-between gap-0.5 overflow-hidden"
      >
        {waveformBars.map((height, index) => (
          <span
            key={index}
            style={{ height }}
            className={cn(
              "w-0.5 shrink-0 rounded-full transition-colors duration-200",
              index < playedBars ? "bg-foreground" : "bg-faint",
            )}
          />
        ))}
      </div>

      <span className="shrink-0 font-mono text-sm tabular-nums text-muted-foreground">
        {playing || currentTime > 0 ? formatTime(currentTime) : sample.duration}
      </span>
    </div>
  );
}
