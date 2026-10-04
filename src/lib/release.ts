/** Puros builds are attached by hand to releases of this repository. */
export const RELEASE_REPO = "purosapp/purosapp";
export const RELEASES_URL = `https://github.com/${RELEASE_REPO}/releases`;

export type Release = {
  /** Display label, e.g. "Alpha 0.0.1". */
  label: string;
  tag: string;
  /** Release notes page on GitHub. */
  notesUrl: string;
  /** Direct .dmg download, or the release page when no disk image is attached. */
  downloadUrl: string;
  /** "Apple Silicon", "Intel" or null when the asset name does not say. */
  architecture: string | null;
  prerelease: boolean;
};

type GitHubAsset = { name: string; browser_download_url: string };
type GitHubRelease = {
  tag_name: string;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  assets: GitHubAsset[];
};

const CHANNELS: Record<string, string> = { alpha: "Alpha", beta: "Beta", rc: "Release Candidate" };

/** "v0.0.1-alpha" → "Alpha 0.0.1"; "v1.2.0" → "1.2.0". */
export function releaseLabel(tag: string): string {
  const match = /^v?(\d+\.\d+\.\d+)(?:-([a-z]+)[.\d]*)?/i.exec(tag);
  if (!match) return tag;
  const [, version, channel] = match;
  if (!channel) return version;
  return `${CHANNELS[channel.toLowerCase()] ?? channel} ${version}`;
}

function architectureOf(assetName: string): string | null {
  if (/arm64|aarch64/i.test(assetName)) return "Apple Silicon";
  if (/x64|x86_64|intel/i.test(assetName)) return "Intel";
  if (/universal/i.test(assetName)) return "Apple Silicon and Intel";
  return null;
}

/**
 * The newest published release, pre-releases included: Puros ships alphas as
 * pre-releases, which GitHub's /releases/latest endpoint skips. Returns null
 * when GitHub is unreachable or has nothing published, so callers can fall
 * back to the releases page.
 */
export async function getLatestRelease(): Promise<Release | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${RELEASE_REPO}/releases?per_page=10`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        // Optional: raises the 60 requests/hour unauthenticated limit.
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return null;
    const releases = (await response.json()) as GitHubRelease[];
    const release = releases.find((candidate) => !candidate.draft);
    if (!release) return null;
    const diskImage = release.assets.find((asset) => asset.name.toLowerCase().endsWith(".dmg"));
    return {
      label: releaseLabel(release.tag_name),
      tag: release.tag_name,
      notesUrl: release.html_url,
      downloadUrl: diskImage?.browser_download_url ?? release.html_url,
      architecture: diskImage ? architectureOf(diskImage.name) : null,
      prerelease: release.prerelease,
    };
  } catch {
    return null;
  }
}
