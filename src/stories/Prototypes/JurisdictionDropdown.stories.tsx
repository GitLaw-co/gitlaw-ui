import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../../components/MenuItem";
import { Icon } from "../../components/Icon";
import ukFlag from "../../../Assets/flags/uk-uk.svg";

/**
 * Prototype: Jurisdiction Dropdown
 *
 * This prototype demonstrates how to compose a jurisdiction/settings dropdown
 * using MenuItem components within a card container.
 */
const meta: Meta<typeof MenuItem> = {
  title: "Prototypes/JurisdictionDropdown",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// UK Flag component for left icon
const UKFlag = () => (
  <img src={ukFlag} alt="UK" className="size-6 rounded-sm object-cover" />
);

/**
 * Jurisdiction dropdown with:
 * - Review agent changes toggle (allows user to review AI changes before they're applied)
 * - Your jurisdiction selector with flag
 */
export const Default: Story = {
  render: () => (
    <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      {/* Review agent changes - with switch */}
      <MenuItem
        primaryText="Review agent changes"
        secondaryText="Review AI changes before applying"
        showSecondaryText
        showLeftElement
        leftIcon={<Icon name="text-search" className="size-6" />}
        width="fill"
        showRSwitch
        rSwitchChecked={true}
        rSwitchSize="s"
      />

      {/* Your jurisdiction - with flag and chevron */}
      <MenuItem
        primaryText="Your jurisdiction"
        secondaryText="England & Wales"
        showSecondaryText
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
        showRIcon1
        rIcon1="chevron-right"
      />
    </div>
  ),
};

/**
 * With switch disabled
 */
export const SwitchDisabled: Story = {
  render: () => (
    <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      <MenuItem
        primaryText="Review agent changes"
        secondaryText="Review AI changes before applying"
        showSecondaryText
        showLeftElement
        leftIcon={<Icon name="text-search" className="size-6" />}
        width="fill"
        showRSwitch
        rSwitchChecked={false}
        rSwitchSize="s"
      />

      <MenuItem
        primaryText="Your jurisdiction"
        secondaryText="England & Wales"
        showSecondaryText
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
        showRIcon1
        rIcon1="chevron-right"
      />
    </div>
  ),
};

/**
 * Jurisdiction selection list (submenu view)
 */
export const JurisdictionList: Story = {
  render: () => (
    <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      {/* Search input placeholder */}
      <div className="px-3 py-2 mb-1">
        <input
          type="text"
          placeholder="Search jurisdictions..."
          className="w-full px-3 py-2 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

      {/* Jurisdiction items */}
      <MenuItem
        primaryText="United Kingdom"
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
        showBackground
      />

      <MenuItem
        primaryText="England & Wales"
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
        selected
        leftElement="select"
      />

      <MenuItem
        primaryText="Singapore"
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
      />

      <MenuItem
        primaryText="Afghanistan"
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
      />
    </div>
  ),
};
