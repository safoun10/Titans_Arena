import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import {Player} from "react-lottie-player"
// import {lottie } from '../../../../../public/lottie/lottie.json'
import lottie from "./lottie.json";
import Lottie from "react-lottie-player";

const FAQSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6">
          <div className="collapse collapse-arrow bg-base-200 mb-6">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How has the rise of eSports impacted the gaming industry?
            </div>
            <div className="collapse-content">
              <p>
                The rise of eSports has transformed gaming into a competitive
                spectator sport. It has led to professional leagues,
                sponsorships, and significant prize pools, bringing gaming to a
                wider audience and elevating it to the level of traditional
                sports in terms of recognition and revenue.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-6">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How have open-world games changed the way players engage with
              virtual environments?
            </div>
            <div className="collapse-content">
              <p>
                Open-world games provide players with expansive, non-linear
                environments to explore, offering freedom of choice in how they
                approach objectives. This has shifted the gaming experience from
                a linear path to a more immersive and player-driven adventure.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-6">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How can the gaming industry address issues of crunch, labor
              rights, and mental health for game developers? ?
            </div>
            <div className="collapse-content">
              <p>
                The industry faces challenges related to crunch periods, job
                stability, and mental health concerns among developers.
                Addressing these issues requires a focus on better work
                conditions, realistic project timelines, and supporting the
                well-being of the people behind the games. These questions delve
                into broader topics and discussions surrounding the gaming
                industry. Feel free to explore these themes further or use them
                as starting points for deeper conversations.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Lottie
            loop
            animationData={lottie}
            play
            style={{ width: 450, height: 450 }}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
