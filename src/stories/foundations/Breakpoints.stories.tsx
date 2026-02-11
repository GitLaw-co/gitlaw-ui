import React, { useState, useEffect } from "react";
import type { Story, StoryDefault } from "@ladle/react";
import {
  containerBreakpoints,
  viewportBreakpoints,
} from "../../constants/breakpoints";

export default { title: "Foundations/Breakpoints", meta: { layout: "fullscreen" } } satisfies StoryDefault;

interface BreakpointSampleProps {
  name: string;
  value: string;
  description: string;
}

const BreakpointSample: React.FC<BreakpointSampleProps> = ({
  name,
  value,
  description,
}) => (
  <div className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
    <div className="w-24">
      <span className="text-sm font-semibold text-foreground">{name}</span>
    </div>
    <div className="w-24">
      <span className="text-sm font-mono text-primary">{value}</span>
    </div>
    <div className="flex-1">
      <span className="text-sm text-subtle">{description}</span>
    </div>
    <div className="w-48">
      <div
        className="h-3 bg-primary rounded-full"
        style={{ width: `${Math.min(parseInt(value) / 20, 100)}%` }}
      />
    </div>
  </div>
);

interface ContainerBreakpointSampleProps {
  name: string;
  value: string;
  prefix: string;
}

const ContainerBreakpointSample: React.FC<ContainerBreakpointSampleProps> = ({
  name,
  value,
  prefix,
}) => (
  <div className="flex items-center gap-4 py-3 border-b border-border last:border-b-0">
    <div className="w-20">
      <span className="text-sm font-semibold text-foreground">{name}</span>
    </div>
    <div className="w-20">
      <span className="text-sm font-mono text-primary">{value}</span>
    </div>
    <div className="flex-1">
      <code className="text-xs font-mono text-subtle">{prefix}:className</code>
    </div>
  </div>
);

const BreakpointsPage = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const breakpoints: BreakpointSampleProps[] = [
    {
      name: "xs",
      value: `${viewportBreakpoints.xs}px`,
      description: "Small phones, compact views",
    },
    {
      name: "sm",
      value: `${viewportBreakpoints.sm}px`,
      description: "Large phones, small tablets",
    },
    {
      name: "md",
      value: `${viewportBreakpoints.md}px`,
      description: "Tablets, small laptops",
    },
    {
      name: "lg",
      value: `${viewportBreakpoints.lg}px`,
      description: "Laptops, desktops",
    },
    {
      name: "xl",
      value: `${viewportBreakpoints.xl}px`,
      description: "Large desktops",
    },
    {
      name: "2xl",
      value: `${viewportBreakpoints["2xl"]}px`,
      description: "Wide screens",
    },
    {
      name: "3xl",
      value: `${viewportBreakpoints["3xl"]}px`,
      description: "Ultra-wide displays",
    },
    {
      name: "4xl",
      value: `${viewportBreakpoints["4xl"]}px`,
      description: "Large monitors, 4K displays",
    },
  ];

  return (
    <div className="p-8 bg-page-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Breakpoints</h1>
        <p className="text-subtle mb-8">
          Responsive breakpoints for the GitLaw design system. Based on the live
          git.law application.
        </p>

        {/* Breakpoints Table */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Breakpoint Scale
          </h2>
          <p className="text-sm text-subtle mb-4">
            Use these breakpoints for responsive design. All breakpoints use
            min-width (mobile-first).
          </p>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            {breakpoints.map((bp) => (
              <BreakpointSample key={bp.name} {...bp} />
            ))}
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-gitlaw-m">
            <p className="text-sm text-foreground">
              <strong>Usage:</strong>{" "}
              <code className="text-primary font-mono">md:flex</code>,{" "}
              <code className="text-primary font-mono">lg:grid-cols-2</code>,{" "}
              <code className="text-primary font-mono">xl:px-8</code>
            </p>
          </div>
        </section>

        {/* Current Viewport */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Current Viewport
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold text-primary font-mono">
                {viewportWidth}px
              </span>
              <span className="text-sm text-subtle">current width</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= 0 ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                Base (0px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints.xs ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                xs ({viewportBreakpoints.xs}px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints.sm ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                sm ({viewportBreakpoints.sm}px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints.md ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                md ({viewportBreakpoints.md}px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints.lg ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                lg ({viewportBreakpoints.lg}px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints.xl ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                xl ({viewportBreakpoints.xl}px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints["2xl"] ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                2xl ({viewportBreakpoints["2xl"]}px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints["3xl"] ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                3xl ({viewportBreakpoints["3xl"]}px+)
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${viewportWidth >= viewportBreakpoints["4xl"] ? "bg-primary text-white" : "bg-secondary text-primary"}`}
              >
                4xl ({viewportBreakpoints["4xl"]}px+)
              </span>
            </div>
            <p className="text-xs text-subtle mt-4">
              Resize the window to see which breakpoints are active. Active
              breakpoints are highlighted.
            </p>
          </div>
        </section>

        {/* Container Queries */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Container Queries
          </h2>
          <p className="text-sm text-subtle mb-4">
            Container queries allow you to style elements based on their parent
            container's size, not the viewport. Uses{" "}
            <code className="text-primary font-mono">
              @tailwindcss/container-queries
            </code>
            .
          </p>

          {/* Container Breakpoints Table */}
          <div className="bg-card p-6 rounded-gitlaw-m border border-border mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Default Container Breakpoints
            </h3>
            {Object.entries(containerBreakpoints).map(([name, value]) => (
              <ContainerBreakpointSample
                key={name}
                name={name}
                value={`${value}px`}
                prefix={name}
              />
            ))}
          </div>

          {/* Container Query Demo */}
          <div className="bg-card p-6 rounded-gitlaw-m border border-border mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Live Demo
            </h3>
            <p className="text-xs text-subtle mb-4">
              Resize the container by dragging the right edge:
            </p>
            <div
              className="@container border-2 border-dashed border-primary/30 p-4 rounded-gitlaw-m resize-x overflow-auto"
              style={{ minWidth: "200px", maxWidth: "100%" }}
            >
              <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="h-12 bg-secondary rounded-gitlaw-m flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-primary">
                      Item {n}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-subtle">
                  Columns:
                  <span className="@sm:hidden"> 1</span>
                  <span className="hidden @sm:inline @lg:hidden"> 2</span>
                  <span className="hidden @lg:inline @2xl:hidden"> 3</span>
                  <span className="hidden @2xl:inline"> 4</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-purple-50 rounded-gitlaw-m space-y-2">
            <p className="text-sm text-foreground">
              <strong>Setup:</strong> Add{" "}
              <code className="text-primary font-mono">@container</code> to the
              parent element.
            </p>
            <p className="text-sm text-foreground">
              <strong>Usage:</strong>{" "}
              <code className="text-primary font-mono">@sm:flex</code>,{" "}
              <code className="text-primary font-mono">@lg:grid-cols-2</code>,{" "}
              <code className="text-primary font-mono">@xl:text-lg</code>
            </p>
            <p className="text-sm text-foreground">
              <strong>Named containers:</strong>{" "}
              <code className="text-primary font-mono">@container/sidebar</code>{" "}
              and{" "}
              <code className="text-primary font-mono">@lg/sidebar:flex</code>
            </p>
          </div>
        </section>

        {/* Responsive Example */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Responsive Grid Example
          </h2>
          <p className="text-sm text-subtle mb-4">
            A grid that adapts from 1 column on mobile to 4 columns on large
            screens.
          </p>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className="h-20 bg-secondary rounded-gitlaw-m flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-primary">
                    Item {n}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-gitlaw-m">
            <p className="text-sm text-foreground font-mono">
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            </p>
          </div>
        </section>

        {/* Common Patterns */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Common Patterns
          </h2>
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-gitlaw-m border border-border">
              <p className="text-sm font-medium text-foreground mb-2">
                Hide on mobile, show on tablet+
              </p>
              <code className="text-xs text-primary font-mono">
                hidden md:block
              </code>
            </div>
            <div className="bg-card p-4 rounded-gitlaw-m border border-border">
              <p className="text-sm font-medium text-foreground mb-2">
                Stack on mobile, row on desktop
              </p>
              <code className="text-xs text-primary font-mono">
                flex flex-col lg:flex-row
              </code>
            </div>
            <div className="bg-card p-4 rounded-gitlaw-m border border-border">
              <p className="text-sm font-medium text-foreground mb-2">
                Responsive text size
              </p>
              <code className="text-xs text-primary font-mono">
                text-sm md:text-base lg:text-lg
              </code>
            </div>
            <div className="bg-card p-4 rounded-gitlaw-m border border-border">
              <p className="text-sm font-medium text-foreground mb-2">
                Responsive padding
              </p>
              <code className="text-xs text-primary font-mono">
                p-4 md:p-6 lg:p-8
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const AllBreakpoints: Story = () => <BreakpointsPage />;
