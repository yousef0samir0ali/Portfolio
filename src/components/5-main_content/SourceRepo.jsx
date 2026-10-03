export function repoKind(url = "") {
  return String(url).includes("gitlab.com") ? "gitlab" : "github";
}

export function RepoIcon({ url }) {
  if (repoKind(url) === "gitlab") {
    return (
      <svg className="gitlab-mark" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.452.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024"
        />
      </svg>
    );
  }

  return <span className="icon-github"></span>;
}
