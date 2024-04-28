'use client';

import { Button, Grid, Textarea } from "@mantine/core";
import { useState } from "react";
import KatexSpan from "../katex/KatexSpan"

export default function App() {
    const [userInput, setUserInput] = useState<string>('')
    const [userInput2, setUserInput2] = useState<string>('')
    const [userInput3, setUserInput3] = useState<string>('')
    const [userInput4, setUserInput4] = useState<string>('')

    return <section className="m-4 p-4">
        <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input placeholder 1st"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan text={userInput} />
                </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput2(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input placeholder 2nd"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan text={userInput2} />
                </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput3(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input placeholder 3rd"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan text={userInput3} />
                </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Textarea
                    onChange={(e) => {
                        setUserInput4(e.target.value)
                    }}
                    label="Enter your katex"
                    placeholder="Input placeholder 4th"
                />
                <div className="bg-slate-950 text-white w-full p-2 my-4">
                    <KatexSpan text={userInput4} />
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