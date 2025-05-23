import React, { useEffect, useState } from "react";

const keyRows = [
  [
    "esc",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Del",
  ],
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "backspace",
  ],
  ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["capslock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "enter"],
  ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"],
  ["ctrl", "Win", "alt", "space", "alt", "Fn", "menu", "ctrl"],
];

const Keyboard = () => {
  const [caps, setCaps] = useState(true);
  const [activeKey, setActiveKey] = useState("");

  const convertKeyPress = (key) => {
    if (key === " ") return "space"
    if(key === 'Escape') return 'esc'
    if(key === 'Delete') return 'del'
    if(key === 'Control')return 'ctrl'
    return key.toLowerCase();
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "capslock") {
        setCaps((prev) => !prev);
      } else {
        console.log(`pressed${e.key}`)
        setActiveKey(convertKeyPress(e.key));
      }
    };
    // const handleKeyUp = (e) => {
    //   setTimeout(()=>setActiveKey(null),5000)
    // };

    window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    //   window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    console.log("Active key:", activeKey);
  }, [activeKey]);

  return (
    <div className="p-6 bg-gray-100  font-mono">
      <div className="bg-white shadow-lg p-4 rounded-lg space-y-2">
        {keyRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.map((key, keyIndex) => {
              const isWide = [
                "backspace",
                "tab",
                "capslock",
                "enter",
                "shift",
                "space",
              ].includes(key);
              const widthClass =
                key === "space"
                  ? "w-[200px]"
                  : isWide
                  ? "w-[90px]"
                  : "w-[45px]";

              // Show letters as upper/lowercase based on caps state
              const label = caps === true ? "uppercase" : "lowercase";
              const active = key.toLowerCase() === activeKey ? 'bg-blue-600':'bg-blue-500';
              return (
                <button
                  key={keyIndex}
                    // onClick={() => alert(key)}
                  className={`${widthClass} ${
                    key.length == 1 ? label : ""
                  } ${active} h-12  text-white rounded-md text-sm hover:bg-blue-600 active:bg-blue-700 transition-all shadow`}
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
