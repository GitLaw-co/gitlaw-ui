"use client"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Badge } from "@/components/Badge"
import { Tag } from "@/components/Tag"
import { Switch } from "@/components/Switch"
import { Avatar } from "@/components/Avatar"
import { Tab, Tabs } from "@/components/Tab"
import { Card } from "@/components/Card"
import { useState } from "react"

export function ComponentShowcase() {
  const [switchChecked, setSwitchChecked] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          GitLaw UI Component Library
        </h1>
        <p className="text-lg text-subtle max-w-2xl mx-auto">
          A comprehensive collection of React components designed for legal document editing and management applications.
        </p>
      </div>

      {/* Component Sections */}
      <div className="space-y-16">
        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Buttons</h2>
          <div className="bg-card rounded-gitlaw-m p-6 shadow-card">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Inputs</h2>
          <div className="bg-card rounded-gitlaw-m p-6 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Default input" 
                label="Default"
              />
              <Input 
                placeholder="With value" 
                label="Filled"
                value="Sample text"
                onChange={() => {}}
              />
              <Input 
                placeholder="Disabled input" 
                label="Disabled"
                disabled
              />
              <Input 
                placeholder="Error state" 
                label="Error"
                status="error"
              />
            </div>
          </div>
        </section>

        {/* Badges & Tags Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Badges & Tags</h2>
          <div className="bg-card rounded-gitlaw-m p-6 shadow-card">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-subtle mb-3">Badges</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Badge type="primary" count={5} />
                  <span className="text-sm text-subtle">Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge type="secondary" count={12} />
                  <span className="text-sm text-subtle">Secondary</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge type="red" count={3} />
                  <span className="text-sm text-subtle">Red</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge type="orange" count={8} />
                  <span className="text-sm text-subtle">Orange</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge type="green" count={99} />
                  <span className="text-sm text-subtle">Green</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge type="red" showNumber={false} />
                  <span className="text-sm text-subtle">Dot only</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-subtle mb-3">Tags</h3>
              <div className="flex flex-wrap gap-3">
                <Tag label="Default Tag" size="m" />
                <Tag label="Small Tag" size="xs" />
                <Tag label="Bold Tag" size="m" weight="bold" />
                <Tag label="With Icon" size="m" showIcon />
                <Tag label="Closeable" size="m" showClose onClose={() => {}} />
              </div>
            </div>
          </div>
        </section>

        {/* Switch Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Switch</h2>
          <div className="bg-card rounded-gitlaw-m p-6 shadow-card">
            <div className="flex items-center gap-4">
              <Switch 
                checked={switchChecked} 
                onChange={setSwitchChecked}
              />
              <span className="text-foreground">
                Switch is {switchChecked ? "on" : "off"}
              </span>
            </div>
          </div>
        </section>

        {/* Avatar Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Avatars</h2>
          <div className="bg-card rounded-gitlaw-m p-6 shadow-card">
            <div className="flex flex-wrap gap-4 items-center">
              <Avatar size="sm" name="John Doe" />
              <Avatar size="md" name="Jane Smith" />
              <Avatar size="lg" name="Bob Wilson" />
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Tabs</h2>
          <div className="bg-card rounded-gitlaw-m p-6 shadow-card">
            <Tabs>
              <Tab 
                status={activeTab === "overview" ? "active" : "inactive"}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </Tab>
              <Tab 
                status={activeTab === "documents" ? "active" : "inactive"}
                onClick={() => setActiveTab("documents")}
              >
                Documents
              </Tab>
              <Tab 
                status={activeTab === "settings" ? "active" : "inactive"}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </Tab>
            </Tabs>
            <div className="mt-4 p-4 bg-page-background rounded-gitlaw-s">
              <p className="text-subtle">
                {activeTab === "overview" && "Overview content goes here"}
                {activeTab === "documents" && "Documents content goes here"}
                {activeTab === "settings" && "Settings content goes here"}
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              type="document"
              title="Contract Agreement"
              subtitle="Last modified 2 hours ago"
            />
            <Card 
              type="document"
              title="NDA Template"
              subtitle="Last modified yesterday"
            />
            <Card 
              type="document"
              title="Service Agreement"
              subtitle="Last modified 3 days ago"
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-subtle">
        <p>GitLaw UI Component Library - Built with React and Tailwind CSS</p>
      </footer>
    </div>
  )
}
