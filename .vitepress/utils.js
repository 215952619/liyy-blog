export const hashRE = /#.*$/;
export const extRE = /(index)?\.(md|html)$/;
export const endingSlashRE = /\/$/;
export const outboundRE = /^[a-z]+:/i;

export function removeExtention(path) {
  return path.replace(/(index)?(\.(md|html))?$/, "") || "/";
}

export function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}

export function isArray(value) {
  return Array.isArray(value);
}

export const isActiveLink = (route, pathPattern, match) => {
  if (!match) return isActive(route, pathPattern);
  const regex = new RegExp(pathPattern);

  return regex.test(normalize(`/${route.data.relativePath}`));
};

export function isExternal(path) {
  return outboundRE.test(path);
}

// TODO: 动态生成GitHub地址
export function createGitHubUrl(
  docsRepo,
  docsDir,
  docsBranch,
  path,
  folder = "examples/",
  ext = ".vue"
) {
  const base = isExternal(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`;
  return `${base.replace(endingSlashRE, "")}/edit/${docsBranch}/${
    docsDir ? `${docsDir.replace(endingSlashRE, "")}/` : ""
  }${folder || ""}${path}${ext || ""}`;
}

export const throttleAndDebounce = (fn, delay) => {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
};

export function isActive(route, path) {
  if (path === undefined) {
    return false;
  }
  const routePath = normalize(`/${route.data.relativePath}`);
  const pagePath = normalize(path);
  return routePath === pagePath;
}

export function normalize(path) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "");
}
export function joinUrl(base, path) {
  const baseEndsWithSlash = base.endsWith("/");
  const pathStartsWithSlash = path.startsWith("/");
  if (baseEndsWithSlash && pathStartsWithSlash) {
    return base.slice(0, -1) + path;
  }
  if (!baseEndsWithSlash && !pathStartsWithSlash) {
    return `${base}/${path}`;
  }
  return base + path;
}
