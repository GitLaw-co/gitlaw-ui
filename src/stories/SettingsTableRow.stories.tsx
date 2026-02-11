import type { Story, StoryDefault } from "@ladle/react";
import React from "react";
import { SettingsTableRow } from "../components/SettingsTableRow";
import { Icon } from "../components/Icon";
import { colors } from "../specs";

export default {
  title: "Components / Data Display / SettingsTableRow",
  meta: { layout: "padded" },
  argTypes: {
    index: {
      control: { type: "number", min: 0, max: 10 },
      description: "Row index — even = purple bg, odd = white bg",
    },
    bold: {
      control: { type: "boolean" },
      description: "Semibold text for summary/total rows",
    },
  },
} satisfies StoryDefault;

/* ------------------------------------------------------------------ */
/*  Story: Default                                                     */
/* ------------------------------------------------------------------ */

export const Default: Story = (args) => <SettingsTableRow {...args} />;
Default.args = {
  index: 0,
  bold: false,
  cells: ["Message", "$0.02", "Apr 19, 2026", "Monthly credits"],
};

/* ------------------------------------------------------------------ */
/*  Story: AllVariants                                                 */
/* ------------------------------------------------------------------ */

export const AllVariants: Story = () => (
  <div className="max-w-[800px]">
    {/* ── Basic zebra table ── */}
    <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-2">
      Usage table (2 columns)
    </p>
    <div className="flex flex-col mb-8">
      <SettingsTableRow
        index={0}
        cells={[
          <span>Remaining monthly credits</span>,
          <span className="text-right">$4.50 / $5.00</span>,
        ]}
      />
      <SettingsTableRow
        index={1}
        cells={[
          <span>Remaining referral credits</span>,
          <span className="text-right">$5.00 / $5.00</span>,
        ]}
      />
      <SettingsTableRow
        index={2}
        cells={[
          <span>Remaining bonus credits</span>,
          <span className="text-right">$10.00 / $10.00</span>,
        ]}
      />
      <SettingsTableRow
        index={3}
        bold
        cells={[
          <span>Total remaining credits</span>,
          <span className="text-right">$19.50 / $20.00</span>,
        ]}
      />
    </div>

    {/* ── 4-column table with action ── */}
    <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-2">
      Activity table (4 columns + action)
    </p>
    <div className="flex flex-col mb-8">
      {[
        { type: "Message", cost: "$0.02", date: "Apr 19, 2026", source: "Monthly credits" },
        { type: "Document draft", cost: "$0.15", date: "Apr 18, 2026", source: "Monthly credits" },
        { type: "Message", cost: "$0.02", date: "Apr 17, 2026", source: "Referral credits" },
        { type: "Review", cost: "$0.08", date: "Apr 16, 2026", source: "Bonus credits" },
      ].map((row, i) => (
        <SettingsTableRow
          key={i}
          index={i}
          cells={[
            <span>{row.type}</span>,
            <div className="flex items-center gap-2">
              <span>{row.cost}</span>
              <Icon name="info" className="size-4" color={colors.iconPrimary} />
            </div>,
            <span>{row.date}</span>,
            <span>{row.source}</span>,
          ]}
          action={
            <button
              type="button"
              className="p-1 hover:bg-secondary rounded transition-colors"
              title="Download"
            >
              <Icon name="arrow-down-to-line" className="size-4" color={colors.iconSecondary} />
            </button>
          }
        />
      ))}
    </div>

    {/* ── Bold summary row ── */}
    <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-2">
      Bold summary row
    </p>
    <div className="flex flex-col">
      <SettingsTableRow
        index={0}
        bold
        cells={[
          <span>Total</span>,
          <span className="text-right">$0.27</span>,
        ]}
      />
    </div>
  </div>
);
