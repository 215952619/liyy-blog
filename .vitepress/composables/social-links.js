import GitHubIcon from "~/components/icons/GithubFill.vue";
import { useData } from "vitepress";

export const useSocialLinks = () => {
  const { theme } = useData();
  const iconMaps = { github: { icon: GitHubIcon } };

  return theme.value.socialLinks.map((linkItem) => ({
    ...linkItem,
    ...(iconMaps[linkItem.key] ?? {}),
  }));
};
