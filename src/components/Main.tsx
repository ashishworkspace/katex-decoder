'use client';

import { ActionIcon, Button, Card, CopyButton, Text, Grid, Textarea, Tooltip, rem, Paper, Code } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import KatexSpan from "../katex/KatexSpan"
import { IconCheck, IconCopy } from "@tabler/icons-react";

export default function App() {
    const [delimiters, setDelimiters] = useState();
    const [userInput, setUserInput] = useState<string>('')
    const [userInput2, setUserInput2] = useState<string>('')
    const [userInput3, setUserInput3] = useState<string>('')
    const [userInput4, setUserInput4] = useState<string>('')

    const handleDelimiterChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        try {
            const parsedDelimiters = JSON.parse(e.target.value);
            console.log(parsedDelimiters)
            setDelimiters(parsedDelimiters);
        } catch (error) {
            console.error('Invalid JSON format for delimiters');
        }
    };


    return <section className="m-4 p-4">
        <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Paper shadow="xs" p="xl">
                            {/* <Code > */}
                            <pre>
                                {`[
    {
        "left": "$",
        "right": "$",
        "display": false
    },
    {
        "left": "\\\\[",
        "right": "\\\\]",
        "display": true
    }
]`}
                            </pre>
                            <div className="mt-4">
                                <CopyButton value={`[\n\t{ "left": "$", "right": "$", "display": false },\n\t{ "left": "\\\\[", "right": "\\\\]", "display": true }\n]`} timeout={2000}>
                                    {({ copied, copy }) => (
                                        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                            <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                                {copied ? (
                                                    <IconCheck style={{ width: rem(32) }} />
                                                ) : (
                                                    <IconCopy style={{ width: rem(32) }} />
                                                )}
                                            </ActionIcon>
                                        </Tooltip>
                                    )}
                                </CopyButton>
                            </div>
                        </Paper>

                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Textarea
                    onChange={handleDelimiterChange}
                    label="Enter your Delimiters"
                    placeholder="Delimiters here"
                    resize="vertical"
                    size="md"
                    autosize
                />
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input 1st"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan delimiters={delimiters} text={userInput} />
                </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput2(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input 2nd"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan delimiters={delimiters} text={userInput2} />
                </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput3(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input 3rd"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan delimiters={delimiters} text={userInput3} />
                </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput4(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input 4th"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan delimiters={delimiters} text={userInput4} />
                </div>
            </Grid.Col>
        </Grid>
        <Button onClick={(e) => {
            e.preventDefault()
            setUserInput('')
            setUserInput2('')
            setUserInput3('')
            setUserInput4('')

        }} color="teal" variant="outline">
            Reset All
        </Button>
    </section>
}