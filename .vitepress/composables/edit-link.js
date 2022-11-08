import { computed } from "vue";
import { useData } from "vitepress";
import { useLocale } from "~/composables/locale";
import { createGitHubUrl } from "~/utils";
import editLinkLocale from "../../i18n/components/content/edit-link.json";

export function useEditLink() {
  const { page, theme, frontmatter } = useData();
  const editLink = useLocale(editLinkLocale);

  const url = computed(() => {
    const {
      repo,
      docsDir = "",
      docsBranch = "dev",
      docsRepo = repo,
      editLinks,
    } = theme.value;

    const showEditLink =
      frontmatter.value.editLink != null
        ? frontmatter.value.editLink
        : editLinks;

    const { relativePath } = page.value;
    if (!showEditLink || !relativePath || !repo) {
      return null;
    }
    return createGitHubUrl(docsRepo, docsDir, docsBranch, relativePath, "", "");
  });

  return {
    url,
    text: editLink.value["edit-on-github"],
  };
}
