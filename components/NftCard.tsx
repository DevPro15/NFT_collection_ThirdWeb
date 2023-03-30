import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Text,
  Button,
} from "@chakra-ui/react";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import NftModal from "./NftModal";

function NftCard({ media, name, description, owner }: any) {
  return (
    <>
      <Card maxW="xs">
        <CardBody>
          <Heading size="md">{name}</Heading>
          <ThirdwebNftMedia metadata={media} className="image" />
          <Stack mt="3" spacing="3">
            <Text size="md" fontWeight="bold">
              Description
            </Text>
            <Text>{description}</Text>
          </Stack>
          <Stack mt="2" spacing="3">
            <Text size="md" fontWeight="bold">
              Owner
            </Text>
            <Text>{owner}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {/* <Button variant="solid" colorScheme="blue">
            View Detail
          </Button> */}
          <NftModal
            media={media}
            description={description}
            name={name}
            owner={owner}
          />
        </CardFooter>
      </Card>
    </>
  );
}

export default NftCard;
