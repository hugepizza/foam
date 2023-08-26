import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Avatar, {
  AvatarFullConfig,
  HairStyle,
  Sex,
  genConfig,
} from "react-nice-avatar";

export default function CuteAvatarList({
  sex,
  setSelectedConfig,
}: {
  sex?: "man" | "woman";
  setSelectedConfig: (avatarConfig: AvatarFullConfig) => void;
}) {
  const [selected, setSelected] = useState(0);
  const [configs, setConfigs] = useState<AvatarFullConfig[]>([]);
  useEffect(() => {
    const hairchtMan = ["normal", "thick", "mohawk"];
    const hairchtWoman = ["normal", "womanLong", "womanShort"];
    const faceColor = ["rgb(243,103,186)", "rgb(162,105,86)"];
    const manConf = getAllCombinations("man", hairchtMan, faceColor);
    const womanConf = getAllCombinations("woman", hairchtWoman, faceColor);
    const configs =
      sex === "man"
        ? manConf
        : sex === "woman"
        ? womanConf
        : manConf.concat(womanConf);
    setConfigs(configs);
  }, [sex]);

  const avatars = useMemo(() => {
    return configs.map((ele, i) => (
      <div
        key={i}
        onClick={(e) => {
          setSelected(i);
          setSelectedConfig(ele);
        }}
        className="mx-1"
      >
        <Avatar
          className={i === selected ? "border-solid" : ""}
          style={{
            width: i === selected ? "76px" : "64px",
            height: i === selected ? "76px" : "64px",
          }}
          {...ele}
        />
      </div>
    ));
  }, [configs, selected]);

  return (
    <div className="flex flex-row w-full overflow-x-auto justify-center items-center">
      {avatars}
    </div>
  );
}

function getAllCombinations(
  gender: string,
  hairs: string[],
  faceColors: string[]
) {
  const results = [];
  for (let i = 0; i < hairs.length; i++) {
    for (let j = 0; j < faceColors.length; j++) {
      results.push(
        genConfig({
          sex: gender as Sex,
          hairStyle: hairs[i] as HairStyle,
          faceColor: faceColors[j],
        })
      );
    }
  }
  return results;
}
