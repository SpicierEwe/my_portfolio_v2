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

export function getIcon(icon: string) {
  const icon = icon.toLowerCase();
  Object.keys(CustomIcons).forEach((key: string) => {
    Object.keys(CustomIcons[key]).forEach((iconName: string) => {
      if (iconName === icon) {
        return CustomIcons[key][iconName];
      }
    });
  });
}
