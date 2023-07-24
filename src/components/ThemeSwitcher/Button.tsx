import React from 'react';

type ChildrenProps = {
  props: {
    switchTheme: () => void;
    isDarkMode: boolean;
  };
  children: React.ReactNode;
};

export default function Button({
  props: { switchTheme, isDarkMode },
  children,
}: ChildrenProps) {
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
