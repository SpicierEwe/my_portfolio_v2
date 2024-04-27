import { cloneElement } from "react";
import { CustomIcons } from "./customIcons";

export function embedCustomLinks({
  link,
  title,
}: {
  link: string;
  title: string;
}): string {
  const x = `<a href=${link} target='_blank' style='color: red; text-decoration: none; font-style: italic;'>${title}</a>`;

  return x;
}

export function getIcon(icon: string, className?: string) {
  let foundIcon;
  const queryIconName = icon.toLowerCase().replace(" ", "");
  Object.keys(CustomIcons).forEach((key: string) => {
    Object.keys(CustomIcons[key]).forEach((iconName: string) => {
      if (iconName === queryIconName) {
        foundIcon = CustomIcons[key][iconName];
      }
    });
  });

  // If the icon is found, clone it and add the provided className
  if (foundIcon) {
    foundIcon = cloneElement(foundIcon, { className });
  }

  return foundIcon;
}
