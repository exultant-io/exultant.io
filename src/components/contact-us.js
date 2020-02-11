import PropTypes from "prop-types"
import React, { useState } from 'react'
import { Flex, Box, Text, Image } from 'rebass'
import Input from "./input"
import TextArea from "./text-area"
import Button from "./button"

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleSubmit(e) {
      // call submit message api
    }

    return (
        <Flex>
            <Box width={1/2} pl={200} py={100} pr={100}>
                <Text fontSize='4' fontWeight='bold' color='#be1e2d' my={2}>
                    Let's talk.
                </Text>
                <Text fontSize='1' fontWeight='bold' color='#68696c' my={2}>
                    Feel free to drop us a message
                </Text>
                <Input type='text' name='name' placeholder='Name' value={name} onChange={handleNameChange}/>
                <Input type='text' name='email' placeholder='Email Address' value={email} onChange={handleEmailChange} />
                <TextArea name='message' cols='80' rows='10' placeholder='Your Message' value={message} onChange={handleMessageChange} />
                <Flex justifyContent='center'>
                    <Button onClick={handleSubmit}> Send </Button>
                </Flex>
            </Box>
            <Box width={1/2} pl={100} py={100} pr={200} >
                <Image
                    width={1}
                    src='/images/exultant-logo-main.png'
                    alignSelf='center'
                />
            </Box>
        </Flex>
    )
}
ContactUs.propTypes = {
  siteTitle: PropTypes.string,
}

ContactUs.defaultProps = {
  siteTitle: ``,
}

export default ContactUs
