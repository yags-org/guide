const fs = require("node:fs");
const path = require("node:path");

const docsPath = "docs";
let navigation = {
  pages: [],
  groups: [],
  global: {
    anchors: [
      {
        anchor: "GitHub",
        href: "https://github.com/summerhosts/website",
        icon: "github",
      },
    ],
  },
};

for (const f of fs.readdirSync(docsPath, { withFileTypes: true })) {
  if (f.isDirectory()) {
    navigation.groups.push({
      group: path.basename(f.name),
      pages: exploreGroup(path.join(docsPath, f.name)),
    });
  } else if (f.name.endsWith(".md") || f.name.endsWith(".mdx"))
    navigation.pages.push(removeExt(f.name));
}

function exploreGroup(dir) {
  let pages = [];

  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory()) {
      pages.push({
        group: path.basename(f.name),
        pages: exploreGroup(path.join(dir, f.name)),
      });
    } else if (f.name.endsWith(".md") || f.name.endsWith(".mdx"))
      pages.push(path.relative(docsPath, path.join(dir, removeExt(f.name))));
  }

  return pages;
}

function removeExt(name) {
  let a = name.split(".");
  a.pop();
  return a.join(".");
}

fs.writeFileSync(
  path.join(docsPath, "docs.json"),
  JSON.stringify(
    {
      $schema: "https://mintlify.com/docs.json",
      theme: "mint",
      name: "Summerhosts",
      favicon: "https://summerhosts.netlify.app/icons/favicon.svg",
      colors: {
        primary: "#17d6cc",
      },
      navigation,
    },
    null,
    2
  )
);
