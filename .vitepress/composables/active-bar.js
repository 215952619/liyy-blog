import { onMounted, onUnmounted, onUpdated } from "vue";
import { isClient } from "@vueuse/core";
import { throttleAndDebounce } from "~/utils";

export function useActiveSidebarLinks(container, marker) {
  if (!isClient) return;
  const onScroll = throttleAndDebounce(setActiveLink, 150);
  function setActiveLink() {
    const sidebarLinks = getSidebarLinks();
    const anchors = getAnchors(sidebarLinks);
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive) {
        history.replaceState(null, document.title, hash || " ");
        activateLink(hash);
        return;
      }
    }
  }

  let prevActiveLink = null;

  function activateLink(hash) {
    deactiveLink(prevActiveLink);

    const activeLink = (prevActiveLink =
      hash == null
        ? null
        : container.value.querySelector(
            `.toc-item a[href="${decodeURIComponent(hash)}"]`
          ));
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.opacity = "1";
      marker.value.style.top = `${activeLink.offsetTop}px`;
    } else {
      marker.value.style.opacity = "0";
      marker.value.style.top = "33px";
    }
  }

  function deactiveLink(link) {
    link && link.classList.remove("active");
  }

  onMounted(() => {
    window.requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });

  onUpdated(() => {
    activateLink(location.hash);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
function getSidebarLinks() {
  return Array.from(document.querySelectorAll(".toc-content .toc-link"));
}
function getAnchors(sidebarLinks) {
  return Array.from(
    document.querySelectorAll(".doc-content .header-anchor")
  ).filter((anchor) =>
    sidebarLinks.some((sidebarLink) => sidebarLink.hash === anchor.hash)
  );
}
function getPageOffset() {
  return document.querySelector(".navbar").offsetHeight;
}
function getAnchorTop(anchor) {
  const pageOffset = getPageOffset();
  try {
    return anchor.parentElement?.offsetTop || 0 - pageOffset - 15;
  } catch {
    return 0;
  }
}
function isAnchorActive(index, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, decodeURIComponent(anchor.hash)];
  }
  return [false, null];
}
