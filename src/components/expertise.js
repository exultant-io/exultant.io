import React, {Fragment} from "react"
import { Flex, Box, Text, Image } from 'rebass'

const Expertise = () => (
    <Fragment>
        <Flex flexDirection='column' pb='100px' px='200px' >
            <Box width={1} my='50px' >
                <Flex justifyContent='center' >
                    <Text fontSize={5} color='red' >
                        HOW WE DID IT
                    </Text>
                </Flex>
            </Box>
            <Box width={1}>
                <Flex flexWrap='wrap' pt='50px' justifyContent='center' alignItems='center' >
                    <Image src='../images/react-js.svg' width={1/4} p='20px' />
                    <Image src='../images/react-js.svg' width={1/4} p='20px' />
                    <Image src='../images/graph-ql.svg' width={1/4} p='20px' />
                    <Image src='../images/mongo-db.svg' width={1/4} p='20px' />
                </Flex>
            </Box>
            <Box width={1}>
                <Flex flexWrap='wrap' justifyContent='center' alignItems='center' > 
                    <Image src='../images/gatsby.svg' width={1/6} p='20px' />
                    <Image src='../images/node-js.svg' width={1/6} p='20px'/>
                    <Image src='../images/javascript.svg' width={1/6} p='65px' />
                    <Image src='../images/after-effects.svg' width={1/6} p='65px' />
                    <Image src='../images/illustrator.svg' width={1/6} p='65px' />
                    <Image src='../images/photoshop.svg' width={1/6} p='65px' />
                </Flex>
            </Box>
        </Flex>
    </Fragment>
)

export default Expertise
