import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import mountain from '../images/mountain';
import sky from '../images/';
import car from '../images/cars';
import road from '../images/road';
import enemy from '../images/enemies';

const Landing = () => {
  // Create a reference to the DOM element
  const landingRef = useRef(null);

  // Initialize PixiJS
  useEffect(() => {
    const app = new PIXI.Application({
      backgroundColor: 0xffffff,
    });
    landingRef.current.appendChild(app.view);

    // Add the road
    const roadSprite = PIXI.Sprite.from(road);
    app.stage.addChild(roadSprite);

    // Add the car
    const carSprite = PIXI.Sprite.from(car);
    carSprite.x = app.screen.width / 2;
    carSprite.y = app.screen.height / 2;
    app.stage.addChild(carSprite);

    // Add the mountain
    const mountainSprite = PIXI.Sprite.from(mountain);
    mountainSprite.x = app.screen.width - mountainSprite.width;
    mountainSprite.y = app.screen.height - mountainSprite.height;
    app.stage.addChild(mountainSprite);

    // Add the sky
    const skySprite = PIXI.Sprite.from(sky);
    skySprite.x = 0;
    skySprite.y = 0;
    app.stage.addChild(skySprite);

    // Add an overlay
    const overlay = new PIXI.Graphics();
    overlay.beginFill(0x000000, 0.5);
    overlay.drawRect(0, 0, app.screen.width, app.screen.height);
    overlay.endFill();
    app.stage.addChild(overlay);
  }, []);

  return <div ref={landingRef} style={{ width: '100%', height: '100%' }} />;
};

export default Landing;
