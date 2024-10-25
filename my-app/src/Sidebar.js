"use client";

import { Sidebar } from "flowbite-react"; // Ensure flowbite-react is installed
import {
  FcBullish,
  FcCalculator,
  FcBiotech,
  FcSms,
  FcOpenedFolder,
  FcCommandLine,
  FcBiomass,
  FcGlobe
} from "react-icons/fc";
import { twMerge } from "tailwind-merge";

// Ensure this is the right export method
export default function Component() { // Use default export if necessary
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/Chat" icon={FcSms}>
            Chat
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={FcOpenedFolder}
            label="Subjects"
          >
            <Sidebar.Item href="/Subjects" icon={FcBullish}>
              Economics
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FcCalculator}>
              Math
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FcBiotech}>
              Biology
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FcCommandLine}>
              Computer Science
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FcBiomass}>
              Chemistry
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FcGlobe}>
              Geography
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
