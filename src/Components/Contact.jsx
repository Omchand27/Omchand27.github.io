import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box id="contact" mt="10%">
      <Heading>Contact Me</Heading>
      <Box
        display="grid"
        w="80%"
        m="auto"
        mt="3%"
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap="8"
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          textAlign="left"
        >
          <Box>
            <Image display="block" m="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="50%" src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605d818d11ffd60001e136be/picture" />
          </Box>
          
          <Box m="auto" mt="3%" justifyContent="center" lineHeight="400%" w="80%">
            <Flex w="80%" m="auto">
              <Text as="h2" fontSize={{sm:"sm", md:"md", lg:"lg"}} fontWeight="bold">
                Name :
              </Text>
            <Text fontWeight="bold" fontSize={{sm:"sm", md:"md", lg:"lg"}}>
               Omchand Kanu
            </Text>
            </Flex>
            <Flex w="80%" m="auto">
              <Text as="h2" fontSize={{sm:"sm", md:"md", lg:"lg"}} fontWeight="bold">
                Address :
              </Text>
            <Text fontSize={{sm:"sm", md:"md", lg:"lg"}} fontWeight="bold">
              Mumbai, India
            </Text>
            </Flex>
            <Flex w="80%" m="auto" >
              <Text as="h2" fontSize={{sm:"sm", md:"md", lg:"lg"}} fontWeight="bold">
                Mobile :
              </Text>
            <Text fontWeight="bold" fontSize={{sm:"sm", md:"md", lg:"lg"}}>
              +91 9137761655
            </Text>
            </Flex>
            <Flex w="80%" m="auto">
              <Text as="h2" fontSize={{sm:"sm", md:"md", lg:"lg"}} fontWeight="bold">
                Email :
              </Text>
            <Text fontWeight="bold" fontSize={{sm:"sm", md:"md", lg:"lg"}}>
              omchandkanu27@gmail.com
            </Text>
            </Flex>
          </Box>
        </Box>
        <Box
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        >
          <form action="https://getform.io/f/ccf9275d-06c4-4b18-838b-b7ee7404ce10" method="POST">
          <Input border="3px solid red" placeholder="Name" w="80%" mt="5%" type="text" name="name" required/>
          <br />
          <Input border="3px solid black" placeholder="Email" w="80%" mt="5%" type="email" name="email" required/>
          <br />
          <Input border="3px solid black" placeholder="Subject" w="80%" mt="5%" type="text" name="subject" required/>
          <br />
          <Input
            border="3px solid black"
            textAlign="left-top"
            placeholder="Message"
            w="80%" mt="5%"
            h="25vh" type="text" name="message" required
          />
          <br />
          <Input w="80%" mt="5%" type="submit" fontSize="xl" color="white" backgroundColor="black"/>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
