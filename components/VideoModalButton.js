"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoModalButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function closeVideo() {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="cta video-trigger"
        onClick={() => setIsOpen(true)}
      >
        Асуудлын учир шалтгаан
        <svg
          className="video-trigger-icon"
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 3.5v9l7-4.5-7-4.5Z" fill="currentColor" />
        </svg>
      </button>
      <dialog
        ref={dialogRef}
        className="video-dialog"
        aria-label="Асуудлын учир шалтгаан"
        onClose={closeVideo}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeVideo();
        }}
      >
        <div className="video-dialog-content">
          <button
            type="button"
            className="video-dialog-close"
            onClick={closeVideo}
            aria-label="Бичлэгийг хаах"
          >
            <span aria-hidden="true" style={{ marginTop: '-4px' }}>
              ×
            </span>
          </button>
          {isOpen && (
            <video
              ref={videoRef}
              className="video-dialog-player"
              src="/reports/video.mp4"
              controls
              autoPlay
              playsInline
              aria-label="Асуудлын учир шалтгааны бичлэг"
            >
              Таны хөтөч видео тоглуулах боломжгүй байна.
            </video>
          )}
        </div>
      </dialog>
    </>
  );
}
