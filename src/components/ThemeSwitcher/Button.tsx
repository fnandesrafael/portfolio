import React from 'react';

type ButtonProps = {
  props: {
    switchTheme: () => void;
    isDarkMode: boolean;
  };
  children: React.ReactNode;
};

export default function Button({
  props: { switchTheme, isDarkMode },
  children,
}: ButtonProps) {
  return (
    <>
      {children}
      <input
        className="hidden"
        type="checkbox"
        name=""
        id="checkbox"
        onChange={switchTheme}
        checked={isDarkMode}
      />
    </>
  );
}
