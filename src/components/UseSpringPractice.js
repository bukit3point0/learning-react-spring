import React, {useState} from 'react'
import styled from 'styled-components'
import {animated, useSpring} from 'react-spring'


import deadMen from './images/spooky.jpg'

const Page = styled.div``
const Box = styled.div``
const Container = styled(Box)`
    margin: 0 auto;
    width: 100%;
`
const Typography = styled(Box)``
const Heading = styled(Typography)`

`
const Flex = styled(Box)`
    display: flex;
`

const AnimatedItem = styled(animated(Flex))`
    justify-content: "space-evenly";
    align-items: "center";
    flex-direction: "column";
    color: "text100";
    /* size: 200; */
    background-image: url(${deadMen});
    /* background-color: black; */
    background-size: "cover";
    background-repeat: "no-repeat";
    border: "8px solid";
    cursor: pointer;
`

const AnimatedBox = styled(animated(Box))``

const ProgressBar = styled(Box)`
    height: 18;
    width: "100%";
    border: 1;

`

const UseSpringPractice = () => {

    const [clicked, setClicked] = useState(false)

    const {
        size,
        counter,
        progress,
        counterFontColor,
        ...springProps
    } = useSpring({
        progress: clicked ? "100%" : "0%",
        size: clicked ? 600 : 500,
        counter: clicked ? 100 : 0,
        // counterFontColor: clicked ? "#fff" : "#000",
        // backgroundPosition: clicked ? "50% 50%" : "50% 50%",
        from: {
            progress: "0%",
            size: 200,
            counter: 0,
            counterFontColor: "#000",
            backgroundPosition: "50% 0%"
        }
    })

    return(
        <Page>
            <Box bg="bg100" minHeight="100vh" py={1}>
                <Container>
                <Heading textAlign="center">React Spring Example - useSpring</Heading>
                <Typography textAlign="center">
                    Click on the box to trigger animation
                </Typography>
                <Flex my={2} justifyContent="center">
                    <ProgressBar>
                    <AnimatedBox
                        bg="blue"
                        height="100%"
                        style={{ width: progress }}
                    />
                    </ProgressBar>
                    <AnimatedBox
                    position="absolute"
                    fontSize={0}
                    style={{ color: counterFontColor }}
                    >
                    {counter.interpolate((val) => Math.floor(val) + "%")}
                    </AnimatedBox>
                </Flex>
                <Flex
                    height={330}
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <AnimatedItem
                    style={{ height: size, width: size, ...springProps }}
                    onClick={() => setClicked(!clicked)}
                    />
                    <AnimatedBox opacity={0.6}>
                    {counter.interpolate((val) => Math.floor(val) + "%")}
                    </AnimatedBox>
                </Flex>
                </Container>
            </Box>
        </Page>
    )
}

export default UseSpringPractice