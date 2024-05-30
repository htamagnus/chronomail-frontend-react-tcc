import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/email-sent.json";
import styles from "./SuccessPage.module.scss";
import { useNavigate } from "react-router-dom";
import videoBackground from "../../assets/background.mp4";

const SuccessPage: React.FC = () => {
  const [message, setMessage] = useState("Agendando email...");
  const navigate = useNavigate();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Email agendado com sucesso!");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.animation}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          eventListeners={[
            {
              eventName: "complete",
              callback: handleAnimationComplete,
            },
          ]}
        />
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default SuccessPage;
