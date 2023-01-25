module.exports = {
  branches: [
    { name: "beta", prerelease: true },
    { name: "next", prerelease: true },
    { name: "main" },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false,
      },
    ],
  ],
};
