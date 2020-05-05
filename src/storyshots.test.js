import path from "path";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";

let storybookUrl = "http://localhost:6006";

// __snap__shots
initStoryshots({
  suite: "Storyshots",
  integrityOptions: { cwd: __dirname },
  test: multiSnapshotWithOptions({})
});

// save image_snapshots with the item being tested
// const getMatchOptions = ({ context: { fileName } }) => {
const getMatchOptions = ({ context: { id, fileName } }) => {
  const customSnapshotIdentifier = id;
  const customSnapshotsDir = `${fileName.slice(
    0,
    fileName.lastIndexOf("/")
  )}/_image_snapshots_`;
  return { customSnapshotsDir, customSnapshotIdentifier };
};

// Circle CI config
if (process.env.CI) {
  storybookUrl = `file://${path.join(__dirname, "../storybook-static")}`;
}

// __image__shots
initStoryshots({
  suite: "Image Storyshots",
  integrityOptions: { cwd: __dirname },
  test: imageSnapshot({
    storybookUrl,
    getMatchOptions
  })
});
