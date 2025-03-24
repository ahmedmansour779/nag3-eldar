import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type VideoHeroProps = {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
};

export function VideoHero({ show, setShow }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (show) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [show]);

  return (
    <div className={`${show ? "block" : "hidden"} w-lvw sm:h-lvh h-[60vh] flex items-center justify-center`}>
      <div className="absolute inset-0 bg-black opacity-90" onClick={() => setShow(false)}></div>
      <video ref={videoRef} className="h-full md:w-auto w-full z-10 object-contain bg-fixed">
        <source src="/videos/hero video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
