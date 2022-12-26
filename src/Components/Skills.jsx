import { Flex, Box, Image, Heading, GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Switch from "./Switch";

const Skills = () => {
  const Skills = [
    {
      Language: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      Language: "CSS",
      image:
        "https://cdn.sanity.io/images/06yd5fkd/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png",
    },
    {
      Language: "Javascript",
      image:
        "https://cdn.sanity.io/images/06yd5fkd/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
    },
    {
      Language: "React",
      image:
        "https://cdn.sanity.io/images/06yd5fkd/production/567ea6f25d34e2d6368538ee70b22726b1d7fd49-2300x2000.png",
    },
    {
      Language: "Redux",
      image:
        "data:image/png;base64,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",
    },
    {
      Language: "ExpressJS",
      image:
        "https://cdn.sanity.io/images/06yd5fkd/production/dcb2205bbf9de51c85e0d3c5847a18afe3375831-225x225.png",
    },
    {
      Language: "Chakra UI",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      Language: "API",
      image:
        "data:image/png;base64,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",
    },
    {
      Language: "Github",
      image:
        "data:image/png;base64,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",
    },
    {
      Language: "MongoDB",
      image:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
    },
    {
      Language: "TypeScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    },
    {
      Language: "Cypress",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1ioRoQmqH3COUr7n6_sHagtpSjjNhbxEW8S659DEMQ&s",
    },
  ];

  const [isHovering, setIsHovering] = useState(true);

  // const [value, setValue] = useState(false);

  return (
    <Box w="90%" m="auto" pt="10%" mb="10%" id="skills">
      <Box w="20%" display="grid" gridTemplateColumns={{sm:"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(2, 1fr)"}} gap="8" m="auto" mb="7%" justifyContent="center" textAlign="center">
        <Box>
        <Heading  pt="18%" fontSize={{base:"4xl",sm:"4xl", md:"4xl", lg:"4xl"}} m="auto" textAlign="down">
          Skills
        </Heading>
        </Box>
        <Box m="auto" h="10vh">
        <Switch
          isOn={isHovering}
          onColor="#94cf3a"
          handleToggle={() => setIsHovering(!isHovering)}
        />
        </Box>
        
      </Box>

      <Box display="grid" gridTemplateColumns={{sm:"repeat(1,1fr)", md:"repeat(2, 1fr)", lg:"repeat(2, 1fr)"}}>
        <Box m="auto">
          <Image
            w="70%"
            display="block"
            borderRadius="50%"
            m="auto"
            src="https://cdn.dribbble.com/users/544967/screenshots/3798185/deforge_young.gif"
          />
        </Box>
        <Grid
          m="auto"
          w="80%"
          templateColumns="repeat(3, 1fr)"
          gap="3"
          // onMouseEnter={() => setIsHovering(!isHovering)}
          // onMouseLeave={() => setIsHovering(false)}
        >
          {Skills.map((ele) => {
            return (
              <GridItem w="70%" m="auto" h="20vh" key={ele.image}>
                <Box>
                  <Image
                    w="90%"
                    m="auto"
                    mb="-20%"
                    // onMouseEnter={() => setIsHovering(!isHovering)}
                    // onMouseLeave={() => setIsHovering(false)}
                    src={ele.image}
                  />
                </Box>
                {isHovering && (
                  <Heading w="110%" fontSize={{base:"10px",sm:"sm", md:"sm", lg:"lg"}} borderRadius="10%" mt="25%">
                    {ele.Language}
                  </Heading>
                )}
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
