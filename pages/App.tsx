import Image from "next/image";
import styles from "../styles/Home.module.css";
import Strobe from "../public/output2.gif";
import Moose from "../public/moose.gif";
import Marquee from "react-fast-marquee";
import { useEffect, useRef, useState } from "react";

function App() {
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/musik2.mp3") : undefined
  );
  // const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  // useEffect(() => {
  //   setAudio(new Audio("/musik2.mp3"));
  // }, []);
  const [audioPlaying, setAudioPlaying] = useState(false);
  return (
    <div className={styles.App}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          overflow: "hidden",
          left: 0,
          right: 0,
          zIndex: 0,
          display: "flex",
        }}
      >
        <Image
          layout="fill"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            alignSelf: "center",
            opacity: 0.5,
          }}
          src={Strobe}
          alt="This is an animated gif image, but it does not move"
        />
      </div>
      {!audioPlaying ? (
        <div
          className={styles.MoosePageContainer}
          onClick={() => {
            if (!audioPlaying) {
              setAudioPlaying(true);
              audio.current?.play();
              // play();
              // play({
              //   forceSoundEnabled: true,
              // });
            }
          }}
        >
          <div className={styles.OpenButton}>Klicka inte på tigerälgen!!!</div>
          <Image
            height={260}
            width={260}
            style={{
              alignSelf: "center",
              borderRadius: "5px",
            }}
            src={Moose}
            alt="This is an animated gif image, but it does not move"
          />
        </div>
      ) : (
        <Content />
      )}
    </div>
  );
}
function Content() {
  return (
    <>
      <Marquee
        style={{
          position: "absolute",
          top: 0,
          zIndex: 1000,
          left: 0,
          right: 0,
          fontFamily: "IBM Plex Mono",
          padding: "1vh",
          color: "rgb(200,60,60)",
          backgroundColor: "rgb(240,180,90)",
        }}
        gradient={false}
        speed={100}
      >
        Tobobobbobobobobobobbobobobobobobobobobobobobo | Allt kommer att bli bra
        | In a galaxy far far away there is a place called... Tobo | Allt kommer
        att bli bra | Tobobobbobobobobobobbobobobobobobobobobobobobo | Allt
        kommer att bli bra | In a galaxy far far away there is a place called...
        Tobo | Allt kommer att bli bra |{" "}
      </Marquee>
      <div
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          overflow: "scroll",
        }}
      >
        <div className={styles.ContentContainer}>
          <div className={styles.Title}>TOBO</div>
          <div className={styles.Date}>27 augusti</div>
          <div
            style={{ maxWidth: "1000px", alignSelf: "center", padding: "5vw" }}
          >
            <span className={styles.Intro}>
              En gång ingen gång, två gånger en vana, tre gånger en tradition!
              Sagolika Tobo är tillbaka för EP. III!
            </span>
            <span className={styles.Intro}>
              Ta med er vänner och skåla in den ljuva sensommaren bland goda
              vänner, skogskonst och konstanta good vibes!
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className={styles.IntroTitleRed}>MUSIK</span>
            </div>
            <span className={styles.Intro}>
              Dansvänlig musik kommer att spelas, allt som flyger! Från solig
              eftermiddag till midnatt och in på småtimmarna.
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className={styles.IntroTitle}>PLATS</span>
            </div>
            <span className={styles.Intro}>Tobo Bruksmuseum.</span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className={styles.IntroTitleRed}>FÄRDMEDEL</span>
            </div>
            <span className={styles.Intro}>
              Tåg till Tobo från Uppsala tar ca 30 min och promenad till festen
              tar max 5 min från stationen.
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className={styles.IntroTitle}>MAT UNDER DAGEN</span>
            </div>
            <span className={styles.Intro}>
              Det finns en pizzeria som gör bra ”sunkpizza” och kebab, eller vad
              som nu floats your boat.
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className={styles.IntroTitleRed}>SOVPLATS</span>
            </div>
            <span className={styles.Intro}>
              Plats för tält och luftmadrass kan lösas. Hör av er innan vid
              intresse! Frukost & kaffe dagen efter.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
