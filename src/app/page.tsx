"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
  ColorInput,
} from "@/once-ui/components";


export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>();
  const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>(["Social Media", "Sales", "Digital Promoter"]);
  const [twoFA, setTwoFA] = useState(false);

  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "https://alpine-nose-09e.notion.site/1ae8e0f076f780508dd3d6e6c43f997a?v=1ae8e0f076f780f49ed5000c17351cec&pvs=4",
      title: "Social Media Agents",
      description: "Capable of handling social media platforms",
    },
    {
      href: "https://alpine-nose-09e.notion.site/Developer-1af8e0f076f7808ab4badcb40b9840bb",
      title: "Developer",
      description: "Build responsive websites and applications using RAG",
    },
    {
      href: "https://alpine-nose-09e.notion.site/Digital-Promoter-1af8e0f076f780e3bc93c32cd8048eef",
      title: "Digital Promoter",
      description: "Handles your digital marketing needs",
    },
  ];

  


  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="m" icon={false} href="www.processimo.com" />
          <Row gap="12" hide="s">
            <Button
              href="https://discord.gg/3YJUeuRE"
              prefixIcon="discord"
              size="s"
              label="Discord"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://github.com/tesseractush/processimo"
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
            <Row position="fixed" top="20" right="20">
              <StyleOverlay position="fixed" top="8" right="8" style={{height: "calc(100vh - var(--static-space-16))"}} />
            </Row>
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="https://discord.gg/3YJUeuRE"
              icon="discord"
              variant="tertiary"
            />
            <IconButton
              href="https://github.com/tesseractush/processimo"
              icon="github"
              variant="tertiary"
            />
            <Row position="fixed" top="20" right="20">
              <StyleOverlay position="fixed" top="8" right="8" style={{height: "calc(100vh - var(--static-space-16))"}} />
            </Row>
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              Welcome to 
              <Text onBackground="brand-medium" marginLeft="8">
                FUTURE  
              </Text>
            </InlineCode>
            <Heading wrap="balance" variant="display-default-l" align="left" marginBottom="16">
              Precision. Power. Processimo
            </Heading>
            <Text marginBottom="32" align="left" onBackground="neutral-weak" variant="display-default-xs">
              At Processimo, we don’t just build AI agents—we redefine the way businesses operate. In a world drowning in inefficiency, our AI-driven solutions cut through the noise, bringing precision, automation, and intelligence to every workflow. Powered by Retrieval-Augmented Generation (RAG) and multi-agent collaboration, our AI systems don’t just respond—they think, adapt, and evolve. Whether it’s customer support, real estate insights, content creation, or business automation, our AI agents work tirelessly to maximize efficiency, minimize friction, and unlock your company’s full potential.</Text>
            
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
              
              <Heading marginBottom="12" as="h2" align="center" variant="heading-default-l">
                Think different. Work smarter. Scale faster.
              </Heading>
            </Column>
          </Column>
          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">
            <Heading as="h2" variant="display-default-m">
              Featured Agents
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              AI agents are intelligent software systems designed to perform tasks autonomously, mimicking human decision-making and problem-solving abilities. These agents can automate repetitive workflows, optimize business processes, and enhance decision-making with real-time data analysis.
            </Text>

            {/* Agents */}
            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-weak"
              overflow="hidden"
            >
              <Row fill hide="m">
                <SmartImage src="/images/customer-support-lady.jpeg" alt="Preview image" sizes="560px" />
              </Row>
              <Column fillWidth horizontal="center" gap="20" padding="32" position="relative">
                <Background
                  mask={{
                    x: 100,
                    y: 0,
                    radius: 75,
                  }}
                  position="absolute"
                  grid={{
                    display: true,
                    opacity: 50,
                    width: "0.5rem",
                    color: "neutral-alpha-medium",
                    height: "1rem",
                  }}
                />
                <Heading as="h3" variant="display-default-s" align="center">
                  Customer Support
                </Heading>
                <Row fillWidth paddingY="24">
                  <Row onBackground="neutral-weak" fillWidth gap="24" vertical="center">
                    <Line />/<Line />
                  </Row>
                </Row>
                <Text onBackground="neutral-weak">
                  Customer Support agents are designed to provide assistance to customers with their inquiries and issues. <br /> They can handle a wide range of customer requests, from product information to order status updates and technical support.
                </Text>
                <Column gap="24" fillWidth>
                  <Text variant="body-strong-m" onBackground="neutral-strong">How It Works:</Text>
                  <Column gap="16" fillWidth>
                    <Row gap="12" vertical="center">
                      <Text variant="body-strong-s" onBackground="neutral-strong">1. User Inquiry</Text>
                      <Text onBackground="neutral-weak">– The customer asks a question via chat, email, or voice.</Text>
                    </Row>
                    <Row gap="12" vertical="center">
                      <Text variant="body-strong-s" onBackground="neutral-strong">2. AI Analysis & Retrieval</Text>
                      <Text onBackground="neutral-weak">– The AI understands the query and fetches relevant information using RAG or pre-trained knowledge.</Text>
                    </Row>
                    <Row gap="12" vertical="center">
                      <Text variant="body-strong-s" onBackground="neutral-strong">3. Response Generation</Text>
                      <Text onBackground="neutral-weak">– The AI crafts a human-like, contextual response.</Text>
                    </Row>
                    <Row gap="12" vertical="center">
                      <Text variant="body-strong-s" onBackground="neutral-strong">4. Resolution & Action</Text>
                      <Text onBackground="neutral-weak">– AI can guide the user, trigger automated workflows, or escalate complex issues.</Text>
                    </Row>
                  </Column>
                </Column>
                <Text onBackground="neutral-weak">
                </Text>
                <Button
                  id="getforbusiness"
                  label="Hire Now"
                  arrowIcon
                  fillWidth
                  onClick={() => {
                    addToast({
                      variant: "success",
                      message: "Wohoo! It's a toast!",
                    });
                  }}
                />
              </Column>
            </Row>
            
          </Column>
          
        </Column>
        <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">

            {/* Agent-2 */}
            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-weak"
              overflow="hidden"
            >
              <Row fill hide="m">
                <SmartImage src="/images/meme-generator.png" alt="Preview image" sizes="560px" />
              </Row>
              <Column fillWidth horizontal="center" gap="20" padding="32" position="relative">
                <Background
                  mask={{
                    x: 100,
                    y: 0,
                    radius: 75,
                  }}
                  position="absolute"
                  grid={{
                    display: true,
                    opacity: 50,
                    width: "0.5rem",
                    color: "neutral-alpha-medium",
                    height: "1rem",
                  }}
                />
                <Heading as="h3" variant="display-default-s" align="center">
                  Meme Generator
                </Heading>
                <Row fillWidth paddingY="24">
                  <Row onBackground="neutral-weak" fillWidth gap="24" vertical="center">
                    <Line />/<Line />
                  </Row>
                </Row>
                <Text onBackground="neutral-weak">
                The AI Meme Generator Agent is an advanced browser automation tool that leverages AI-powered agents to create memes effortlessly. By integrating multi-LLM (Large Language Model) capabilities with automated browser interactions, this AI-driven tool can generate memes based on text prompts, directly manipulating websites to produce high-quality, contextually relevant meme content.
                </Text>
                <Column gap="24" fillWidth>
                  <Text variant="body-strong-m" onBackground="neutral-strong">How It Works:</Text>
                  <Column gap="16" fillWidth>
                    <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">1. User Input</Text>
                    <Text onBackground="neutral-weak">– The user provides a text prompt and it create meme by interacting with imgflip.com meme templates</Text>
                    </Row>
                    <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">2. Smart Generation Workflow</Text>
                    <Text onBackground="neutral-weak">– Metaphorical template matching</Text>
                    </Row>
                    <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">3. Smart Generation Workflow</Text>
                    <Text onBackground="neutral-weak">– Automatic retry mechanism for failed generations</Text>
                    </Row>
                    <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">4. Meme Generation</Text>
                    <Text onBackground="neutral-weak">– The final meme is created and can be downloaded or shared instantly.</Text>
                    </Row>
                  </Column>
                </Column>
                <Text onBackground="neutral-weak">
                </Text>
                <Button
                  id="getforbusiness"
                  label="Hire Now"
                  arrowIcon
                  fillWidth
                  onClick={() => {
                    addToast({
                      variant: "success",
                      message: "Wohoo! It's a toast!",
                    });
                  }}
                />
              </Column>
            </Row>
          {/* Agent-2 */}
          <Row
            marginY="32"
            background="overlay"
            fillWidth
            radius="xl"
            border="neutral-alpha-weak"
            overflow="hidden"
          >
            <Row fill hide="m">
              <SmartImage src="/images/real-estate-agent.png" alt="Preview image" sizes="560px" />
            </Row>
            <Column fillWidth horizontal="center" gap="20" padding="32" position="relative">
              <Background
                mask={{
                  x: 100,
                  y: 0,
                  radius: 75,
                }}
                position="absolute"
                grid={{
                  display: true,
                  opacity: 50,
                  width: "0.5rem",
                  color: "neutral-alpha-medium",
                  height: "1rem",
                }}
              />
              <Heading as="h3" variant="display-default-s" align="center">
                Real Estate Agent
              </Heading>
              <Row fillWidth paddingY="24">
                <Row onBackground="neutral-weak" fillWidth gap="24" vertical="center">
                  <Line />/<Line />
                </Row>
              </Row>
              <Text onBackground="neutral-weak">
                The AI Real Estate Agent is an intelligent automation tool that simplifies the property search and market analysis process using Firecrawl’s Extract endpoint and Agno AI Agent’s insights. By gathering data from multiple real estate platforms and providing AI-powered recommendations, this agent ensures users find the best properties based on their preferences while gaining valuable investment insights.
              </Text>
              <Column gap="24" fillWidth>
                <Text variant="body-strong-m" onBackground="neutral-strong">How It Works:</Text>
                <Column gap="16" fillWidth>
                  <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">1. User Input</Text>
                    <Text onBackground="neutral-weak">– The user selects search filters such as location, budget, and property type.</Text>
                  </Row>
                  <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">2. Data Extraction</Text>
                    <Text onBackground="neutral-weak">– The AI agent fetches listings from multiple real estate platforms using Firecrawl’s Extract API.</Text>
                  </Row>
                  <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">4. Intelligent Recommendations</Text>
                    <Text onBackground="neutral-weak">– The system ranks properties based on affordability, ROI, and future appreciation potential.</Text>
                  </Row>
                  <Row gap="12" vertical="center">
                    <Text variant="body-strong-s" onBackground="neutral-strong">4. Results Display</Text>
                    <Text onBackground="neutral-weak">– The AI-powered platform presents interactive property listings with insights and investment tips.</Text>
                  </Row>
                </Column>
              </Column>
              <Text onBackground="neutral-weak">
              </Text>
              <Button
                id="getforbusiness"
                label="Hire Now"
                arrowIcon
                fillWidth
                onClick={() => {
                  addToast({
                    variant: "success",
                    message: "Wohoo! It's a toast!",
                  });
                }}
              />
            </Column>
          </Row>

          </Column>

        {/* PAYMENT */}
        <Row
          paddingX="32"
          fillWidth
          paddingY="160"
          gap="64"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
          <Background
            style={{ left: "-1px" }}
            borderTop="neutral-alpha-medium"
            mask={{
              x: 0,
              y: 50,
              radius: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              opacity: 100,
              width: "10%",
              color: "neutral-alpha-medium",
              height: "1.25%",
            }}
          />
          <Row
            position="relative"
            shadow="xl"
            fillWidth
            border="neutral-alpha-medium"
            borderStyle="dashed"
            background="page"
            radius="xl"
          >
            <TiltFx
              aspectRatio="16 / 9"
              fillWidth
              radius="xl"
              border="accent-alpha-weak"
              overflow="hidden"
            >
              <HoloFx fill>
                <Background
                  fill
                  position="absolute"
                  gradient={{
                    display: true,
                    tilt: -45,
                    height: 150,
                    width: 100,
                    x: 75,
                    y: -50,
                    colorStart: "brand-solid-strong",
                    colorEnd: "accent-solid-weak",
                  }}
                >
                  <Column
                    fill
                    position="absolute"
                    padding="24"
                    vertical="end"
                    gap="12"
                    onSolid="neutral-strong"
                  >
                    
                    
                    
                    <Text variant="body-default-xl">Zephyr Nexus</Text>
                    <Row
                      fillWidth
                      horizontal="space-between"
                      vertical="end"
                      paddingRight="16"
                    >
                      <Column gap="4">
                        <Text variant="body-default-m">Real Estate Agent</Text>
                        
                        <Text variant="body-default-m" onBackground="neutral-medium">Agent Id - REA081</Text>
                      </Column>
                      <img src="./trademark/icon-light.svg" width="200" />
                    </Row>
                  </Column>
                </Background>
              </HoloFx>
            </TiltFx>
          </Row>
          <Column position="relative" fillWidth gap="-1">
            <Row fillWidth vertical="center" horizontal="space-between" marginBottom="32">
              <Heading as="h3" variant="display-default-xs">
                Get Access to your personal <br />AI Agent help you work efficiently
              </Heading>
              <IconButton
                data-border="rounded"
                variant="tertiary"
                icon="chevronRight"
                tooltip="Next"
                tooltipPosition="left"
              />
            </Row>
            
            
          </Column>
        </Row>

        

        

        

        <Row
          position="relative"
          fillWidth
          paddingX="32"
          paddingTop="160"
          minHeight={28}
          paddingBottom="80"
          horizontal="center"
          vertical="end"
        >
          <Background
            mask={{
              x: 50,
              y: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Row position="relative" textVariant="display-default-m" align="center">
            Projects we're working on
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
            {links.map((link, index) => (
              <SmartLink unstyled fillWidth target="_blank" key={link.href} href={link.href}>
                <Card
                  fillWidth
                  padding="40"
                  gap="8"
                  direction="column"
                  background={undefined}
                  borderRight={index < links.length - 1 ? "neutral-alpha-weak" : undefined}
                  border={undefined}
                  radius={undefined}
                >
                  <Row fillWidth center gap="12">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Row>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Card>
              </SmartLink>
            ))}
          </Row>
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Logo wordmark={false} size="s" />
            <Text size="m">
              <Text onBackground="neutral-weak">2025 /</Text> Processimo
            </Text>
            
          </Column>
        </Row>
      </Column>

      <Dialog
        isOpen={isFirstDialogOpen}
        onClose={() => setIsFirstDialogOpen(false)}
        title="Account details"
        description="Manage your security settings and password."
        base={isSecondDialogOpen}
        onHeightChange={(height) => setFirstDialogHeight(height)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsFirstDialogOpen(false)}>
              Close
            </Button>
          </>
        }
      >
        <Column paddingTop="24" fillWidth gap="24">
          <Switch
            reverse
            isChecked={twoFA}
            onToggle={() => setTwoFA(!twoFA)}
            label="2FA"
            description="Enable two factor authentication"
          />
          <Button onClick={() => setIsSecondDialogOpen(true)}>Change password</Button>
        </Column>
      </Dialog>
      <Dialog
        isOpen={isSecondDialogOpen}
        onClose={() => setIsSecondDialogOpen(false)}
        title="Change password"
        stack
        description="Choose a new password for your account."
        minHeight={firstDialogHeight}
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsSecondDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsSecondDialogOpen(false)}>Save</Button>
          </>
        }
      >
        <PasswordInput id="resetPassword" label="New password" />
      </Dialog>
    </Column>
  );
}
