"use client";

import { AI_NAME } from "@/features/theme/theme-config";
import { Hero } from "@/features/ui/hero";
import { PocketKnife } from "lucide-react";
import { NewExtension } from "./new-extension";

export const ExtensionHero = () => {
  return (
    <Hero
      title={
        <>
          <PocketKnife size={36} strokeWidth={1.5} /> Extensions
        </>
      }
      description={`Seamlessly connect ${AI_NAME} with internal APIs or external
        resources`}
    >
      <NewExtension />

    </Hero>
  );
};
